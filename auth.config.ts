import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Instagram from "next-auth/providers/instagram"
import Facebook from "next-auth/providers/facebook"
// import Auth0 from "next-auth/providers/auth0"
import Discord from "next-auth/providers/discord"
import Twitter from "next-auth/providers/twitter"
import { LoginSchema, MagicLinkSchema, SolanaSchema, RegisterSchema } from "@/schemas";
import { getUserByEmail, getUserByWalletSolana } from "@/data/user";
// import { web3providers } from "./auth.web3.config";
import { getCsrfToken } from "next-auth/react";
import { SigninMessage } from "@/components/web3/SigninMessage";
import { console } from "inspector";
import { db } from "@/lib/db";

export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export default {
  providers: [
    Discord(
      {
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        allowDangerousEmailAccountLinking: true
      }
    ),
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),

    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    // Auth0({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }

        return null;
      }
    }),
    Credentials({
      id: "magicLink",
      name: "magicLink",
      async authorize(credentials) {
        const validatedFields = MagicLinkSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email } = validatedFields.data;

          const user = await getUserByEmail(email);
          // if (!user || !user.password) return null;
          return user;
        }
        return null;
      }
    }),// web3providers,
    Credentials({
      id: "ethereum",
      name: "ethereum",
      async authorize(credentials) {
        // const validatedFields = MagicLinkSchema.safeParse(credentials);
        const validatedFields = { success: true, data: { email: 'dayuan.code@gmail.com' } };

        if (validatedFields.success) {
          const { email } = validatedFields.data;

          const user = await getUserByEmail(email);
          // if (!user || !user.password) return null;
          return user;
        }
        return null;
      }
    }),
    Credentials({
      id: "solana",
      name: "solana",
      async authorize(credentials) {
        console.log('credentials,solana)', credentials);
        const CombinedSchema = RegisterSchema.merge(SolanaSchema);
        const validatedFields = CombinedSchema.safeParse(credentials);
        if (validatedFields.success) {
          // const { message , signature } = validatedFields.data;
          const { walletAddress, message, signature, handle, email, password } = validatedFields.data;
          console.log('validatedFields', validatedFields.data);
          const signinMessage = new SigninMessage(
            JSON.parse(JSON.stringify({
              domain: 'localhost:3000',
              publicKey: walletAddress,
              statement: `Sign this message to sign in to the app.`,
              nonce: message, // csrfToken
            }))
          );

          const validationResult = await signinMessage.validate(
            signature || ""
          );
          console.log('validationResult', validationResult);

          if (!validationResult)
            throw new Error("Could not validate the signed message");



          const existingUser = await getUserByWalletSolana(walletAddress);
          console.log('existingUser', existingUser);
          if (!existingUser) {
            // return { error: "User does not exist!" };
            const newUser = await db.user.create({
              data: {
                name: email,
                handle: handle,
                email: email,
                password: password,
              },
            });

            const newWallet = await db.wallet.create({
              data: {
                userId: newUser.id, // 使用新用戶的 ID 連結
                type: 'wallet', // 根據需要設置錢包類型
                ecosystem: 'Solana', // 設置錢包所屬的生態系統
                chain: 'Solana', // 設置錢包所屬的區塊鏈
                network: 'mainnet', // 設置錢包所屬的網絡
                walletProvider: 'Phatom', // 設置錢包提供者的名稱
                walletAddress: walletAddress, // 假設 walletAddress 是從前面的代碼中獲得的
                nonce: message, // 假設 nonce 是從前面的代碼中獲得的 csrfToken
                signMessage: JSON.stringify(signinMessage), // 假設 signMessage 是從前面的代碼中獲得的
                signature: signature, // 假設 signature 是從前面的代碼中獲得的
                scope: process.env.NEXTAUTH_URL, // 設置錢包的作用範圍
              },
            });
            return newUser;
          } else {
            const updatedWallet = await db.wallet.update({
              where: {
                walletAddress: walletAddress,
                chain: 'Solana',
                network: 'mainnet',
              },
              data: {
                walletProvider: 'Phatom', // 設置錢包提供者的名稱
                nonce: message, // 假設 nonce 是從前面的代碼中獲得的 csrfToken
                signMessage: JSON.stringify(signinMessage), // 假設 signMessage 是從前面的代碼中獲得的
                signature: signature, // 假設 signature 是從前面的代碼中獲得的
                scope: process.env.NEXTAUTH_URL, // 設置錢包的作用範圍
              },
            });
            return existingUser;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig