"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { Crypto } from "@/components/auth/crypto";
import { BackButton } from "@/components/auth/back-button";
import { Separator } from "@/components/ui/separator";
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className=" w-fit shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col  md:flex-row w-full gap-8">
          <div className="flex max-w-[400px] min-w-[350px] flex-col">
            {children}
          </div>
          <div className="flex max-w-[400px] flex-col h-full justify-center items-center">
            {showSocial && (
              <Social />
            )}
            <Separator className="my-4" />
            {showSocial && (
              <Crypto />
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};
