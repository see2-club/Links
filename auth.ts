import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";
import { LinkPage } from "./lib/profile";

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

//curl -X POST https://oidc.login.xyz/register -d '{"redirect_uris":["https://YOUR_AUTH0_DOMAIN/login/callback"]}'
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    },
    signIn: async (message) => {
      const { account, profile, user, isNewUser } = message;
      console.log("events-signIn", user, account, profile ,isNewUser);
      // 取得需要的社交登入資訊
      if (account && profile) {
        console.log("events-signIn account upsert");
        await db.account.upsert({
          where: {
            provider_providerAccountId: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          },
          update: {
            session_state: account.session_state ? String(account.session_state) : undefined, // 確保類型匹配
            profile: profile as any,
          },
          create: {
            userId: user.id !,
            type: account.type,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            access_token: account.access_token ?? undefined,
            refresh_token: account.refresh_token ?? undefined,
            expires_at: account.expires_at ?? undefined,
            token_type: account.token_type ?? undefined,
            scope: account.scope ?? undefined,
            id_token: account.id_token ?? undefined,
            session_state: account.session_state ? String(account.session_state) : undefined, // 確保類型匹配
            profile: profile as any,
            achievement:{}
          },
        });  
      } else {
        console.log("events-signIn account upsert error");
      }
    }
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("callbacks signIn", user, account, profile);
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id as string);

      // await db.updateUser({
      //   id: user.id,
      //   customField: profile.customField,
      // });

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if (!twoFactorConfirmation) return false;

        // Delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id }
        });
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.handle = token.handle as string;
        session.user.name = token.name;
        session.user.email = token.email as string; 
        session.user.isOAuth = token.isOAuth as boolean;
        session.user.linkPage = token.linkPage as LinkPage;

      }

      if (token.sub) { // 確保 token.sub 定義
        const [, chainId, address] = token.sub.split(':');
        if (chainId && address) {
          session.address = address;
          session.chainId = parseInt(chainId, 10)
        }
      }

      return session;
    },
    async jwt({ token,session }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(
        existingUser.id
      );

      token.isOAuth = !!existingAccount;
      token.handle = existingUser.handle;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.linkPage = {} as LinkPage;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
