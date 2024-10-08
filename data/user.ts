import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

// export const registerWalletUser = async (handle: string) => {


// }


// Wallet Login 與 Wallet register 皆使用 email 作為識別
// Wallet Login 會先檢查是否有對應的 User，若無則回傳 null 要求註冊 (填寫 email)
// Wallet Register 會先檢查是否有對應的 User，若無則建立 User
// A .請使用者登入後再進行 Wallet 綁定 
// B .使用者先進行 Wallet 綁定後再進行登入
// 問題: 是否需要建立 account 或是直接在 User 中加入 solana wallet 
// (考量？) 一個 User 可能有多個 wallet (solana, ethereum, ...)
// 實作 Ａ: 先建立 User，再建立 account 將 provider 定為 solana  wallet 並填入 address 
// 實作 Ｂ: 先建立 User，直接在 User 中加入 solana wallet

export const getUserByWalletSolana = async (walletAddress: string) => {
  try {
    // const account = await db.account.findUnique({
    //   where: { id: accountId },
    //   include: { user: true }, // 包含關聯的 user
    // });

    // return account ? account.user : null; // 返回對應的 user 或 null

    // const user = await db.user.findUnique({ where: { email } });
    // TODO: add wallet solana 是否存在，是否需要建立 account 或是直接在 User 中加入 solana wallet
    const walletWithUser = await db.wallet.findUnique({
      where: {
        walletAddress: walletAddress, // 根據錢包地址查詢
      },
      include: {
        user: true, // 包含關聯的用戶資料
      },
    });
    if (!walletWithUser) return null; // 檢查 walletWithUser 是否為 null
    const user = walletWithUser.user; // 獲取用戶資料
    return user;
  } catch {
    return null;
  }
};