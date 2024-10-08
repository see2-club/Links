import * as z from "zod";
// import { UserRole } from "@prisma/client";

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const SettingsSchema = z.object({
  handle: z.optional(z.string()),
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "New password is required!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    message: "Password is required!",
    path: ["password"]
  })

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const MagicLinkSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const SolanaSchema = z.object({
  message: z.string().min(1, {
    message: "message is required",
  }),
  signature: z.string().min(1, {
    message: "Signature is required",
  }),
  walletAddress: z.string().min(1, {
    message: "walletAddress is required",
  }),
});

export const RegisterSchema = z.object({
  handle: z.string().min(1, {
    message: "Handle is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const CreateProfileSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  url: z.string().min(1, {
    message: "Url is required",
  }),
});

export const ProfileSchema = z.object({
  title: z.string().min(1, {
    message: "Profile Title is required",
  }),
  url: z.string().min(1, {
    message: "Url is required",
  }),
  description: z.string().optional(), // 可選的描述
  image: z.string().optional(), // 可選的圖片 URL
  userId: z.string(), // 外鍵，指向用戶 ID
  template: z.any().optional(), // 可選的模板，使用 Json
  isComplete: z.boolean().default(false), // 默認為 false
  isPublic: z.boolean().default(false), // 默認為 false
  isTemplate: z.boolean().default(false), // 默認為 false
  isPublished: z.boolean().default(false), // 默認為 false
});


export const CreateProfileHandleFormSchema = z.object({
  url: z.string().min(1, {
    message: "Handle is required",
  }),
});

export const CreateProfileSelectTemplateSchema = z.object({
  template: z.object({
    id: z.number().min(1, { message: "Template ID is required" }),
    name: z.string().min(1, { message: "Template Name is required" }),
    description: z.string().optional(), // 可選屬性
    color: z.string().min(1, { message: "Template Color is required" }),
  }),
});

export const CreateProfileSelectSocialPlatformSchema = z.object({
  platform: z.string().min(1, {
    message: "Platform is required",
  }),
});

export const CreateProfileLinkSchema = z.object({
  links: z.array(
    z.object({
      title: z.string().min(1, {
        message: "Title is required",
      }),
      link: z.string().min(1, {
        message: "Link is required",
      }),
    })
  ).min(1, { message: "At least one link is required" })
    .max(3, { message: "A maximum of three links are allowed" }),
});

export const CreateProfileUserInfoSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  bio: z.string().min(1, {
    message: "Description is required",
  }),
  image: z.string().min(1, {
    message: "Image is required",
  }),
});