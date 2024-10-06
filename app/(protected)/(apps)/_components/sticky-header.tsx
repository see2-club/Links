'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Orbitron } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutGrid, BarChart2, User, PieChart } from "lucide-react"
import { FaLink } from "react-icons/fa";
import { UserActionButton } from "@/components/auth/user-atcion-button";
import { ScrollArea } from "@/components/ui/scroll-area"
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



export default function StickyHeaderbar() {
  const pathname = usePathname()

  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    const header = headerRef.current
    const sentinel = sentinelRef.current
    let observer

    if (!header || !sentinel) return

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsSticky(!entry.isIntersecting)
        },
        { threshold: [1] }
      )

      observer.observe(sentinel)
    } else {
      // Fallback for older browsers
      const handleScroll = () => {
        if (sentinel) {
          setIsSticky(window.pageYOffset > sentinel?.offsetTop)
        }
      }
      // @ts-ignore
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    return () => {
      if (observer && sentinel) {
        observer.unobserve(sentinel)
      }
    }
  }, [])

  return (
    <>
      <div className={`
          
          ${isSticky
          ? 'h-0'
          : 'h-[120px]'}
        `} />
      <div ref={sentinelRef} className="sentinel " aria-hidden="true" />
      <header
        ref={headerRef}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${isSticky
            ? 'bg-white shadow-md py-0'
            : 'bg-transparent py-0'}
        `}
      // style={{ height: '64px' }} 
      >
        <div className="h-[60px] flex justify-between items-center w-full text-white  bg-[#272525]    px-4">
          <div className="flex items-center gap-2">
            <Logo className="w-auto h-[24px]" />
            {/* <Image src="/logo.svg" alt="Logo" width={58} height={24} priority /> */}
            <span className="text-xl font-bold text-nowrap">See2 Link</span>
          </div>
          <div className="flex items-center">
            <UserActionButton />
          </div>

        </div>
        <nav className="h-15 space-y-2 flex justify-between items-center w-full text-white  bg-[#272525]">
          
          {navigation.map((item) => (
            <Link href={item.href} key={item.name} prefetch={true}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full h-full  flex-col items-center justify-center",
                  item.href === pathname && "bg-lime-400 text-black hover:bg-lime-400 hover:text-black"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
         
        </nav>
      </header>
      {/* Add padding to prevent content from jumping when header becomes sticky */}
      <div className={`h-[120px]  ${isSticky ? 'block' : 'hidden'}`} />
    </>
  )
}