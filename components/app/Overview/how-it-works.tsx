import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Connect wallet or via social login",
    content:
      "Just connect your crypto wallet or log in using your favorite social media account.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Build your see2 profile ",
    content:
      "Customize your See2 profile with your unique style, link your wallet, and showcase your digital assets. This is your gateway to the decentralized world, and your identity is in your hands.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Copy, share, your web3 style begin",
    content:
      "Once your profile is ready, you're set to share it with the world! Copy your See2 link, post it, share it, and watch your Web3 lifestyle take off.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
