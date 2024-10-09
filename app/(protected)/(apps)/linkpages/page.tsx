import { ProfileList } from "@/components/profile/edit/list/profile-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getLinkPageByCurrentUser, LinkPage } from "@/lib/profile";

const ListProfilePage = async () => {
  const linkPages = await getLinkPageByCurrentUser();

  return (
      <ProfileList linkPages={linkPages as unknown as LinkPage[]} />
  );
}

export default ListProfilePage;