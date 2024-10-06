"use client";
import { Link, Zap, Shield } from 'lucide-react'
import Image from 'next/image'
import ImageAvatar from "@/images/projects/rem_avatar_up.png"

export default function FeatureSection() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto max-w-5xl text-center mb-12">
        <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
          See2 link solution
        </h4>

        <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
          Web3 ID for All
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Link className="w-6 h-6" />}
            title="All in one link"
            description="Easily connect all your social media accounts, personal website, and Web3 achievements in one convenient link. Simplify sharing and enhance your online visibility with a single, powerful URL."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Own the style"
            description="Express yourself by customizing your See2 profile theme in just a few clicks. Choose from a variety of design options to create a unique online identity that reflects your personality and brand."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Identity Proxy"
            description="Utilize your See2 profile as a secure identity proxy. Protect yourself from malicious attacks and scams while enjoying seamless access to your favorite platforms. Experience peace of mind knowing your information is safeguarded effortlessly."
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={ImageAvatar}
            alt="Web3 ID Mascot"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="flex justify-center md:justify-start mb-2">
        <div className="bg-zinc-800 p-2 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}