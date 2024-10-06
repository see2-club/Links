// import { ProfileList } from "@/components/profile/edit/list/profile-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getLinkPageByCurrentUser, LinkPage } from "@/lib/profile";

const ListProfilePage = async () => {
  const linkPages = await getLinkPageByCurrentUser();

  return (
    <ScrollArea className="h-[calc(100vh-120px)] ">
      {/* <ProfileList linkPages={linkPages as unknown as LinkPage[]} /> */}
    </ScrollArea>

  );
}

export default ListProfilePage;