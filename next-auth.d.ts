import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  handle: string;
  linkPage: LinkPage;
};

declare module "next-auth" {
  interface Session extends SIWESession {
    user: ExtendedUser;
    address: string
    chainId: number
  }
}
