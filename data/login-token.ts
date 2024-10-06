import { db } from "@/lib/db";

export const getLoginTokenByToken = async (
  token: string
) => {
  try {
    const loginToken = await db.loginToken.findUnique({
      where: { token }
    });

    return loginToken;
  } catch {
    return null;
  }
}

export const getLoginTokenByEmail = async (
  email: string
) => {
  try {
    const loginToken = await db.loginToken.findFirst({
      where: { email }
    });

    return loginToken;
  } catch {
    return null;
  }
}