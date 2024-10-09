import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

import Sidebar from "./_components/sidebar";
import StickyHeaderbar from "./_components/sticky-header";

export default function Component({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col md:flex-row h-full bg-[#171717]">
      <span className=" hidden md:flex">
        <Sidebar />
      </span>
      <span className="flex md:hidden flex-col">
        <StickyHeaderbar />
      </span>
      <div className="flex-1  grow">
        <ScrollArea className="h-[calc(100vh-120px)] md:h-[calc(100vh)] ">
          {children}
        </ScrollArea>
      </div>
    </div>
  )
}