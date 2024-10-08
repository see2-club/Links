"use client";

import { useState, useRef } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { FaWallet } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useInView } from "framer-motion";
import Safari from "@/components/magicui/see2-safari";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <div className="py-1 gap-4 px-1 backdrop-filter-[12px] inline-flex  items-center justify-between rounded-full border border-white/5 bg-white/10  text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group  translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="w-fit bg-[#1E293B] rounded-full px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm mr-2">
          👀 Announcement
        </div>
        <TextShimmer className="inline-flex items-center justify-center">
          <span>Introducing see2.link</span>
          <MdOutlineOpenInNew className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 mr-2" />
        </TextShimmer>
      </div>
      <h1 className=" bg-gradient-to-r from-[#1A1A1A] via-[#F8FAFC] to-[#1A1A1A] hover:bg-gradient-to-r hover:from-green-300 hover:via-blue-500 hover:to-purple-600 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Showcase your
        <br className="hidden md:block" />lifestyle with See2.link
      </h1>
      <p className="mb-12 text-lg tracking-tight text-[#94A3B8] md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Whether you&apos;re showcasing yourself or amplifying your vibe,
        <br className="hidden md:block" />See2.link is the place to make it happen.</p>
      <Link className="mr-6 text-sm" href="/auth/login">
        <RainbowButton
        // className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5224 9.85254L11.5217 7.44119C5.07655 7.19807 1.82174 13.7123 1 16.9998H7.59784L8.58927 14.5866H3.88955C5.75043 10.5794 9.07462 9.76089 10.5224 9.85254Z" fill="black" stroke="black" stroke-width="0.40678" />
            <path d="M13.4776 14.5818L12.4783 16.9932C18.9235 17.2363 22.1783 10.7221 23 7.43457L16.4022 7.43457L15.4107 9.84773H20.1105C18.2496 13.8549 14.9254 14.6735 13.4776 14.5818Z" fill="black" stroke="black" stroke-width="0.40678" />
            <path d="M8.71851 13.1738L9.60869 11.2678C7.55395 11.1519 6.20185 12.4902 5.78261 13.1738H8.71851Z" fill="black" stroke="black" stroke-width="0.40678" />
            <path d="M14.325 11.2607L13.4348 13.1667C15.4896 13.2826 16.8417 11.9443 17.2609 11.2607H14.325Z" fill="black" stroke="black" stroke-width="0.40678" />
            <path d="M14.4141 7.43457H15.3478L11.4989 16.9998H10.5652L14.4141 7.43457Z" fill="black" stroke="black" stroke-width="0.40678" />
            <path d="M12.5011 7.43457H13.4348L9.58586 16.9998H8.65218L12.5011 7.43457Z" fill="black" stroke="black" stroke-width="0.40678" />
          </svg>
          <span>Connect Wallet</span>
          <FaWallet className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </RainbowButton>
      </Link>
      <div
        ref={ref}
        className=" mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,hsla(241 100% 7% / 0.53)_30%,transparent)]"
      >
        <div
          className={`relative z-20 rounded-2xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${inView ? "before:animate-image-glow" : ""
            }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          />
          <Safari url="see2.link" className="size-full rounded-[inherit] border object-contain" >
            <HeroVideoDialog
              className="p-1 z-50 relative touch-auto"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/iOSsSkr7Cso?si=fxUg-NPjSlSMS-2l"
              thumbnailSrc="/edit.png"
              thumbnailAlt="Hero Video"
            />
          </Safari>
        </div>
      </div>
    </section>
  );
}
