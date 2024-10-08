"use client";

import { signIn } from "next-auth/react";
import { FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";


import { useSearchParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { toast } from "sonner"

export const Crypto = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const router = useRouter();

  const onClick = (provider: "solana" | "ethereum" | "bitcoin" | "telegram") => {
    if (provider === "solana") {
      toast("is bata testing");
      router.push("/auth/web3-login");
    } else {
      toast("coming soon");
    }
  }

  return (
    <div className=" grid grid-cols-4 gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("solana")}
      >
        <SiSolana className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("ethereum")}
      >
        <FaEthereum className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("bitcoin")}
      >
        <FaBitcoin className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("telegram")}
      >
        <FaTelegram className="h-5 w-5" />
      </Button>
    </div>
  );
};
