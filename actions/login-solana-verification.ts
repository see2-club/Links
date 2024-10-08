"use server";
// @ts-ignore
import * as z from "zod";

import { db } from "@/lib/db";
import { getUserByWalletSolana } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { RegisterSchema, SolanaSchema } from "@/schemas";
const CombinedSchema = RegisterSchema.merge(SolanaSchema);
import { SigninMessage } from "@/components/web3/SigninMessage";

/// Ethereum  可能要在這裡加入 Ethereum 的驗證
export const loginSolanaVerification = async (values: z.infer<typeof CombinedSchema>, callbackUrl?: string | null,
) => {
  const validatedFields = CombinedSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { walletAddress, message, signature, handle, email, password } = validatedFields.data;
  console.log('validatedFields', validatedFields.data);
  if (!walletAddress) {
    return { error: "Invalid wallet address!" };
  }

  if (!signature) {
    return { error: "Invalid signature!" };
  }

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



  // const existingUser = await getUserByWalletSolana(walletAddress);
  // console.log('existingUser', existingUser);
  // if (!existingUser) {
  //   // return { error: "User does not exist!" };
  //   const newUser =  await db.user.create({
  //     data: {
  //       name: email,
  //       handle: handle,
  //       email: email,
  //       password: password,
  //     },
  //   });

  //   const newWallet = await db.wallet.create({
  //     data: {
  //       userId: newUser.id, // 使用新用戶的 ID 連結
  //       type: 'wallet', // 根據需要設置錢包類型
  //       ecosystem: 'Solana', // 設置錢包所屬的生態系統
  //       chain: 'Solana', // 設置錢包所屬的區塊鏈
  //       network: 'mainnet', // 設置錢包所屬的網絡
  //       walletProvider: 'Phatom', // 設置錢包提供者的名稱
  //       walletAddress: walletAddress, // 假設 walletAddress 是從前面的代碼中獲得的
  //     },
  //   });
  // }



  // 使用 NextAuth.js 進行登入
  try {
    await signIn("solana", {
      ...values,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: `"Invalid credentials!" ${error.message}` }
        default:
          return { error: "Something went wrong!" }
      }
    }

    throw error;
  }
  // try {
  //   // await signIn("solana", {
  //   //   message: "solana",
  //   //   signature: DEFAULT_LOGIN_REDIRECT,
  //   // })
  //   await signIn("solana", {
  //     walletAddress, 
  //     message, 
  //     signature, 
  //     handle, 
  //     email, 
  //     password, 
  //     // redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
  //     redirectTo: DEFAULT_LOGIN_REDIRECT,
  //   })
  // } catch (error) {
  //   if (error instanceof AuthError) {
  //     switch (error.type) {
  //       case "CredentialsSignin":
  //         return { error: `"Invalid credentials!" ${error.message}` }
  //       default:
  //         return { error: "Something went wrong!" }
  //     }
  //   }

  //   throw error;
  // }

  return { success: "Logged in successfully!" };
};