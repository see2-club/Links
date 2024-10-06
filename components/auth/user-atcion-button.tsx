"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons"
import { Settings } from "lucide-react"
import { FaUserCircle } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "../ui/button";
import Link from "next/link";

const mockUser = {
  name: 'SEE2 CLUB',
  image: '/images/default_user_avatar.png',
}

export const UserActionButton = () => {
  const user = useCurrentUser() || mockUser;

  return (
    <div className=" p-2 flex items-center gap-4 w-full justify-between">
      <Avatar className="w-6 h-6 ">
        <AvatarImage  src={user?.image || ""} alt="SEE2 CLUB" />
        <AvatarFallback className="bg-sky-500">
          <FaUser className="text-white" />
        </AvatarFallback>
      </Avatar>
      <span className="text-md font-medium">{user.name}</span>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Settings className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full" align="end">
          <LogoutButton>
            <DropdownMenuItem>
              <ExitIcon className="h-4 w-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </LogoutButton>
            <Link href="/account">
            <DropdownMenuItem>
              <FaUserCircle className="h-4 w-4 mr-2" />
              Account
            </DropdownMenuItem>
            </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
