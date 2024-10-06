/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Orbitron } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutGrid, BarChart2, User, PieChart } from "lucide-react"
import { FaLink } from "react-icons/fa";
import { UserActionButton } from "@/components/auth/user-atcion-button";
import {
  Logo
} from "@/components/icons"


type IconPropsExpansion = { className: string }
const navigation = [
  { name: 'Overview', href: '/overview', icon: LayoutGrid },
  { name: 'Aggregator', href: '/aggregator', icon: BarChart2 },
  { name: 'Account ', href: '/account', icon: User },
  // { name: 'Analytics', href: '/analytics', icon: PieChart },
  { name: 'LinkPages', href: '/linkpages', icon: FaLink },
] as { name: string; href: string; icon: React.FC<IconPropsExpansion> }[]



export default function Sidebar() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <aside className=" text-white w-60 m-2 bg-[#272525] flex flex-col    gap-y-5 overflow-y-auto px-2 rounded-3xl justify-between">
      <div className="p-4">
        <div className="flex items-center mb-8">
          <Logo className="w-auto h-[24px]" />
          {/* <Image src="/logo.svg" alt="Logo" width={58} height={26} priority /> */}
          <span className="text-xl font-bold">See2 Link</span>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name} prefetch={true}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start p-4 my-2",
                  item.href === pathname && "bg-lime-400 text-black hover:bg-lime-400 hover:text-black"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      <UserActionButton />

    </aside>
  )
}
