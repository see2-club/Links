import { auth } from "@/auth";
import { db } from "@/lib/db";
import { User } from "next-auth";

export interface LinkPage {
  id: string; // 假設 id 是字串
  title: string; // 假設 title 是字串
  description: string; // 假設 description 是字串
  userId: string; // 假設 userId 是字串
  url: string; // 假設 url 是字串
  isComplete: boolean; // 假設 isComplete 是布爾值
  isPublic: boolean; // 假設 isPublic 是布爾值
  isTemplate: boolean; // 假設 isTemplate 是布爾值
  isPublished: boolean; // 假設 isPublished 是布爾值
  image: string; // 假設 image 是字串
  template: string; // 假設 template 是字串
  createdAt: Date; // 假設 createdAt 是日期
  updatedAt: Date; // 假設 updatedAt 是日期
  user: User; // 假設 user 是 User 類型
  // 根據需要添加其他屬性
}

export interface DataType {
  type: 'link' | 'social'  
}

export interface Link {
  type: 'link',
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface Socials {
  socials: Social[];
}

export interface Links {
  links: Link[];
}

export interface Social {
  type: 'social',
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export const getLinkPageById = async (id: string) => {
  return await db.linkPage.findUnique({
    where: { id },
    include: { user: true }, // 如果需要獲取關聯的 User 資料
  });
};

export const getLinkPageByIdAndUserId = async (id: string, userId: string) => {
  return await db.linkPage.findFirst({
    where: { id: id, userId: userId },
    include: { user: true }, // 如果需要獲取關聯的 User 資料
  });
};

export const getLinkPageByIdAndCurrentUser = async () => {
  const session = await auth();

  // 獲取當前使用者的 ID
  const userId = session?.user?.id;
  const linkPageId = session?.user?.linkPage.id;
  if (!userId) {
    throw new Error("User not authenticated");
  }
  if (!linkPageId) {
    throw new Error("User not selected linkPage");
  }

  // 獲取當前使用者的 LinkPages
  const linkPages = await db.linkPage.findFirst({
    where: { userId, id: linkPageId },
    include: { user: true }, // 如果需要獲取關聯的 User 資料
  });

  return linkPages; // 返回 LinkPages
};

export const currentLinkPage = async () => {
  const session = await auth();

  // 確保用戶已登入
  if (!session?.user) {
    throw new Error("User not authenticated");
  }

  if (!session?.user?.linkPage.id) {
    throw new Error("User not selected linkPage");
  }

  const linkPage = await getLinkPageById(session?.user?.linkPage.id);

  // 獲取當前用戶的 LinkPages

  // const linkPages = await db.linkPage.findFirst({
  //   where: { userId: session.user.id }, // 根據用戶 ID 查詢
  // });

  return linkPage as LinkPage; // 返回當前用戶的 LinkPages
};

export const getInEditLinkPageByCurrentUser = async () => {
  const session = await auth();

  // 獲取當前使用者的 ID
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // 獲取當前使用者的 LinkPages
  const linkPages = await db.linkPage.findMany({
    where: { userId, isComplete: false },
    include: { user: true }, // 如果需要獲取關聯的 User 資料
  });

  return linkPages; // 返回 LinkPages
};

export const getLinkPageByCurrentUser = async () => {
  const session = await auth();

  // 獲取當前使用者的 ID
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // 獲取當前使用者的 LinkPages
  const linkPages = await db.linkPage.findMany({
    where: { userId },
  });

  return linkPages; // 返回 LinkPages
};