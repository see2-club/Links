import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Instagram from "next-auth/providers/instagram"
import Facebook from "next-auth/providers/facebook"
// import Auth0 from "next-auth/providers/auth0"
import Discord from "next-auth/providers/discord"  
import Twitter from "next-auth/providers/twitter"
import { LoginSchema,MagicLinkSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
// import { web3providers } from "./auth.web3.config";

export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export default {
  providers: [
    Discord(
      {
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        allowDangerousEmailAccountLinking: true
      }
    ),
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),

    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    // Auth0({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }

        return null;
      }
    }),
    Credentials({
      id: "magicLink",
      name: "magicLink",
      async authorize(credentials) {
        const validatedFields = MagicLinkSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email } = validatedFields.data;
          
          const user = await getUserByEmail(email);
          // if (!user || !user.password) return null;
          return user;
        }
        return null;
      }
    }),
    // web3providers,
  ],
} satisfies NextAuthConfig