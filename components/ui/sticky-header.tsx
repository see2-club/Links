'use client'

import { useState, useEffect, useRef } from 'react'

export default function StickyHeader() {
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

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
        if (sentinel ) {
          setIsSticky(window.pageYOffset > sentinel.offsetTop)
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
      <div  className={`
          
          ${isSticky
            ? 'h-0'
            : 'h-16'}
        `} />
      <div ref={sentinelRef} className="sentinel " aria-hidden="true" />
      <header
        ref={headerRef}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${isSticky
            ? 'bg-white shadow-md py-2'
            : 'bg-transparent py-4'}
        `}
      // style={{ height: '64px' }} 
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Logo</div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* Add padding to prevent content from jumping when header becomes sticky */}
      <div className={`h-16  ${isSticky ? 'block' : 'hidden'}`} />
    </>
  )
}