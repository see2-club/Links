"use client"
import HowItWorks from "@/components/app/Overview/how-it-works";
import { ScrollArea } from "@/components/ui/scroll-area"

const OverviewPage = () => {

  return ( 
    <ScrollArea className="h-[calc(100vh-120px)]">
      <HowItWorks />
    </ScrollArea>
  );
}
 
export default OverviewPage;