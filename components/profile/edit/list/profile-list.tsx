'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Copy, UserCircle2 } from "lucide-react"
import { currentUser } from "@/lib/auth";
import { getLinkPageByCurrentUser, LinkPage } from "@/lib/profile";
import { UserInfo } from "@/components/user-info";
import { Badge } from "@/components/ui/badge"

import { useSession } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { toast } from "sonner";

import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";
interface ProfileListProps {
  linkPages: LinkPage[];
}

export const ProfileList = ({ linkPages }: ProfileListProps) => {
  const user = useCurrentUser();
  const { data: session, update } = useSession();
  const router = useRouter();
  const [selectedLinkPageId, setSelectedLinkPageId] = useState<string | null>(null); // 新增狀態

  const handleContinue = async () => {
    if (selectedLinkPageId !== null) {
      // 處理繼續的邏輯
      console.log('selectedLinkPageId:', selectedLinkPageId);
      await update({
        user: {
          linkPage: { id: selectedLinkPageId }
        }
      });
      router.push(`/editor/?id=${selectedLinkPageId}`);
    }
  };

  const handleCreatLinkPage = async () => {
    toast.success('Create new Link');
    // router.push('/editor');
  };

  return (

    <div className="max-w-2xl mx-auto p-6 space-y-8 bg-[#232323] ">
      <h1 className="text-4xl font-bold text-center leading-tight">
        Select a edit See2Link
        <br /> brand new See2Link
      </h1>
      {linkPages.map((linkPage: LinkPage) => (
        <Card
          className={`bg-gray-100 hover:bg-gray-200 ${selectedLinkPageId === linkPage.id ? 'border-2 border-blue-500' : ''}`}
          key={linkPage.id}
          onClick={() => setSelectedLinkPageId(linkPage.id)} // 點擊時更新選擇的卡片
        >
          <CardContent className="flex items-center space-x-4 p-4">
            <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
              S
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 ">{linkPage.title}</h2>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-gray-600">see2.link/{linkPage.url}</span>
              </div>
            </div>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-100">
              Copy URL
            </Button>
          </CardContent>
        </Card>
      ))}
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <UserCircle2 className="w-6 h-6 text-purple-600 mt-1" />
          <p className="flex-grow">
            Your See2Link will now be managed by an account linked to
            <br />
            <Badge>{user?.handle}</Badge>
            <strong>{user?.email}</strong>
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <ArrowRight className="w-6 h-6 text-purple-600 mt-1" />
          <p className="flex-grow">
            Log in to manage all your profiles with the same method you logged into this
            account.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <Copy className="w-6 h-6 text-purple-600 mt-1" />
          <p className="flex-grow">
            To switch between See2Links, go to the account menu in the top right and
            click on your profile.
          </p>
        </div>
      </div>
      {linkPages.length === 0 ?
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-xl rounded-full"  onClick={handleCreatLinkPage}>
          Create new Link
        </Button> :
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-xl rounded-full"  disabled={!selectedLinkPageId} onClick={handleContinue}>
          Continue
        </Button>}
    </div>

  );
};
