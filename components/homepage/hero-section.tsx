"use client";
import Pill from "@/components/common/pill";
import Features from "@/components/common/features";
import BloomNFTCard from "@/components/common/bloom-nft";
import { m } from "framer-motion";

export default function HeroSection() {
  return (
    <section>
      <div className="container-custom mb-12 px-4 pt-12 pb-6 md:pt-16">
        <div className="mx-auto mb-12 max-w-3xl">
          <m.div
            className="mb-4 text-center md:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0 }}
          >
            <Pill text="Season 1" />
          </m.div>

          <m.h1
            className="mb-2 text-center text-5xl font-bold text-white md:mb-4 md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
          >
            Bloom
          </m.h1>

          <m.h2
            className="mb-8 text-center text-4xl font-bold text-white md:mb-12 md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
          >
            OG Pass
          </m.h2>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.4 }}
          >
            <Features />
          </m.div>

          <m.p
            className="mx-auto max-w-2xl px-4 text-center text-sm leading-relaxed text-white/70 md:px-0 md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.5 }}
          >
            Bloom NFT is a limited-edition drop of 1,000 collectibles. Connect
            your wallet, check eligibility, and claim yours. First guaranteed,
            then first-come first-served — once they're gone, they're gone.
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.6 }}
        >
          <BloomNFTCard />
        </m.div>
      </div>
    </section>
  );
}
