import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";
import {FeatureScroll1} from "@/components/landing/feature-scroll-section";
import {BentoLayout} from "@/components/landing/bento-layout";
import { SphereMask } from "@/components/magicui/sphere-mask";
import FeatureSection from "@/components/landing/feature-section";

export default async function Page() {
  return (
    <>
     <HeroSection />
      {/* <ClientSection /> */}
      <SphereMask />
      <FeatureSection />
      {/* <BentoLayout /> */}
      {/* <FeatureScroll1 /> */}
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
