"use client";
import { useState } from "react";
import { Check, Trophy } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/general";
import { NFTCounter } from "./NFTCounter";
import { NFTImage } from "./NFTImage";
import {
  Tab,
  TabNavigation,
} from "@/components/common/bloom-nft/tab-navigation";
import { EligibilityTabContent } from "@/components/common/bloom-nft/eligibility-tab-content";
import { PoolTabContent } from "@/components/common/bloom-nft/pool-tab-content";
import { FCFSTabContent } from "@/components/common/bloom-nft/FCFSTab-content";

export default function BloomNFTCard() {
  const [activeTab, setActiveTab] = useState("eligibility");

  const tabs: Tab[] = [
    {
      id: "eligibility",
      label: "Eligibility Check",
      icon: <Check className="h-3.5 w-3.5" />,
    },
    {
      id: "guaranteed",
      label: "Guaranteed Pool",
      icon: (
        <Image
          alt="Guaranteed Pool"
          width={14}
          height={14}
          className="h-3.5 w-3.5 flex-shrink-0"
          src="https://pulsarmoney.b-cdn.net/bloom/lead-gray.png"
        />
      ),
    },
    {
      id: "fcfs",
      label: "First Come, First Served",
      icon: <Trophy className="h-3.5 w-3.5" />,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl p-4 lg:max-w-4xl lg:p-0">
      <NFTCounter current={0} total={1000} className="mb-6 block lg:hidden" />

      {/* Main Card */}
      <div
        className={cn(
          "flex w-full flex-col overflow-hidden rounded-2xl p-0",
          "border lg:border-white/15 lg:bg-white/5",
          "lg:shadow-[0_4px_30px_rgba(0,0,0,0.1)] lg:backdrop-blur-[150px]",
        )}
      >
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[400px_1fr]">
          {/* NFT Image Section */}
          <NFTImage
            src="https://pulsarmoney.b-cdn.net/bloom/nft-updated.png"
            alt="Bloom NFT"
          />

          {/* Divider (Desktop only) */}
          <div className="absolute top-0 bottom-0 left-[400px] hidden w-px bg-white/10 lg:block" />

          {/* Content Section */}
          <div className="flex flex-col gap-6 lg:p-6">
            <NFTCounter current={0} total={1000} className="hidden lg:block" />

            <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* Tab Content */}
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full">
                {activeTab === "eligibility" && <EligibilityTabContent />}
                {activeTab === "guaranteed" && <PoolTabContent />}
                {activeTab === "fcfs" && <FCFSTabContent />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
