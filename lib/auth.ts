import { auth } from "@/auth";
import { db } from "@/lib/db";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentDBUser = async () => {
  const session = await auth();

    // 假設您有一個方法來獲取當前使用者的 ID
    const userId = session?.user?.id;
  
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { accounts: true }, // 包含 accounts
    });
  
    return user;
};

export const currentUserAccounts = async () => {
  const session = await auth();

    // 假設您有一個方法來獲取當前使用者的 ID
    const userId = session?.user?.id;
  
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { accounts: true }, // 包含 accounts
    });
  
    return user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
