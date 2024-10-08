import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  See2BlackIcon,
  See2WhiteIcon,
} from "@/components/icons"
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "/",
        name: "See2 Life",
      },
      {
        href: "/protocol",
        name: "See2 Protocol",
      },
      {
        href: "/faq",
        name: "FAQ",
      },
    ],
  },

  {
    label: "Community",
    items: [
      {
        href: "https://discord.gg/sUpBPVHaEU",
        name: "Discord",
      },
      {
        href: "https://twitter.com/see2club",
        name: "Twitter",
      },
      {
        href: "mailto:support@see2.club",
        name: "Email",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/terms",
        name: "Terms",
      },

      {
        href: "/privacy",
        name: "Privacy",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "",
    name: "Discord",
    icon: <DiscordLogoIcon className="h-4 w-4" />,
  },
  {
    href: "",
    name: "Twitter",
    icon: <TwitterLogoIcon className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4 justify-start">
            <Link href="https://www.see2.club/" target="_blank" className="flex items-center gap-2">
              <See2BlackIcon className=" rounded-2xl  size-16 text-black dark:text-white lg:size-16" />
              {/* <img
                src="https://magicui.design/icon.png"
                className="h-8 w-8 text-primary"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                See2.link
              </span>
            </Link>
            <a href="https://www.see2.club/" target="_blank"  >
              <AnimatedGradientText>
                👀 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
                  See the Unseen Unleash Unparalleled Vision
                </span>
                <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <p>Club See2</p>
              </AnimatedGradientText>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                  {nav.label}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              See2.link
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}
