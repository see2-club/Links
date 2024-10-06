"use server";
// @ts-ignore

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const loginTokenVerification = async (token: string) => {
  const existingToken = await db.loginToken.findUnique({
    where: { token },
  });

  if (!existingToken) {
    return { error: "Invalid token!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const user = await getUserByEmail(existingToken.email);
  console.log('user', user);
  if (!user) {
    return { error: "User does not exist!" };
  }

  // 刪除令牌以防止重複使用
  // await db.loginToken.delete({
  //   where: { token },
  // });

  // 使用 NextAuth.js 進行登入
  try {
    await signIn("magicLink", {
      email: user.email,
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

  return { success: "Logged in successfully!" };
};