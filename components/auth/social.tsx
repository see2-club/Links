"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiDiscordLogo } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";

import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "discord" | "github" | "auth0" | "twitter" | "instagram" | "facebook" | "telegram" | "apple") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className=" grid grid-cols-4 gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("discord")}
      >
        <PiDiscordLogo className="h-5 w-5" />
      </Button>     
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("twitter")}
      >
        <FaXTwitter className="h-5 w-5" />
      </Button>
      {/* <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("auth0")}
      >
        <SiAuth0 className="h-5 w-5" />
      </Button> */}
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("telegram")}
      >
        <FaTelegram className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("apple")}
      >
        <IoLogoApple className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("facebook")}
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("instagram")}
      >
        <FaInstagram className="h-5 w-5" />
      </Button>
    </div>
  );
};
