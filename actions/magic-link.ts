"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateLoginToken } from "@/lib/tokens";
import { sendLoginEmail } from "@/lib/mail";

export const sendMagicLinkEmail = async (email: string) => {
  const user = await getUserByEmail(email);

  if (!user) {
    return { error: "Email does not exist!" };
  }

  const loginToken = await generateLoginToken(email);
  await sendLoginEmail(loginToken.email, loginToken.token);

  return { success: "Login link sent!" };
};