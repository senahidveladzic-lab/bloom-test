"use client"
import { useState, useRef, useEffect } from "react";
import { m } from "framer-motion";
import { Check, Trophy, Wallet } from "lucide-react";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";

export default function BloomNFTCard() {
  const [activeTab, setActiveTab] = useState("eligibility");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef(new Map());

  const tabs = [
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
          width="14"
          height="14"
          className="w-3.5 h-3.5 flex-shrink-0"
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

  useEffect(() => {
    const activeTabElement = tabsRef.current.get(activeTab);
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full p-4 lg:p-0 max-w-3xl lg:max-w-4xl mx-auto">
      <div className="text-left lg:text-left block lg:hidden mb-6">
        <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
          0 <span className="text-lg lg:text-xl font-normal text-white/60">of 1,000</span>
        </div>
      </div>
      {/* Main Card */}
      <div className="flex flex-col rounded-2xl w-full overflow-hidden p-0 lg:bg-white/5 border lg:border-white/15 lg:backdrop-blur-[150px] lg:shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-0">
          {/* NFT Image Section */}
          <div className="relative  mb-6 lg:mb-0 lg:p-2">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                alt="Bloom NFT"
                fill
                className="object-cover w-full h-full"
                src="https://pulsarmoney.b-cdn.net/bloom/nft-updated.png"
              />
            </div>
          </div>

          {/* Divider (Desktop only) */}
          <div className="hidden lg:block absolute left-[400px] top-0 bottom-0 w-px bg-white/10" />

          {/* Content Section */}
          <div className="lg:p-6 flex flex-col gap-6">
            {/* Counter */}
            <div className="text-center lg:text-left hidden lg:block">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                0 <span className="text-lg lg:text-xl font-normal text-white/60">of 1,000</span>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="-mx-4 lg:-mx-6">
              <div className="px-4 lg:px-0">
                <div className="relative">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="inline-flex gap-1 pb-2">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          ref={(el) => {
                            if (el) {
                              tabsRef.current.set(tab.id, el);
                            } else {
                              tabsRef.current.delete(tab.id);
                            }
                          }}
                          onClick={() => setActiveTab(tab.id)}
                          className={`relative flex items-center gap-2 px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors !outline-none focus:!outline-none focus-visible:!outline-none ${
                            activeTab === tab.id
                              ? "text-white"
                              : "text-white/60 hover:text-white/80"
                          }`}
                        >
                          {tab.icon}
                          <span>{tab.label}</span>
                        </button>
                      ))}

                      {/* Animated Indicator */}
                      <m.div
                        className="absolute bottom-0 h-0.5 bg-white"
                        initial={false}
                        animate={{
                          left: indicatorStyle.left,
                          width: indicatorStyle.width,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    </div>
                  </div>
                  {/* Bottom Border */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full">
                <m.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Eligibility Card */}
                  <div className="flex flex-col rounded-2xl p-4 w-full bg-white/10 border border-white/15 backdrop-blur-[6.8px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full p-2.5 flex-shrink-0 bg-white/10">
                        <Wallet className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-medium text-white mb-1">
                          Check Your Eligibility
                        </h3>
                        <div className="text-white/60 text-xs">
                          Connect wallet to see if you're eligible for the Guaranteed Pool or
                          First Come, First Served
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connect Wallet Button */}
                  <div className="mt-6">
                    <ConnectKitButton.Custom>
                      {({ isConnected, show, truncatedAddress, ensName }) => {
                        return (
                          <button
                            onClick={show}
                            className="inline-flex items-center justify-center gap-2 w-full py-2 text-base font-medium text-white bg-primary rounded-full transition-all shadow-lg"
                          >
                            <Check className="h-4 w-4" aria-hidden="true" />
                            {isConnected ? (ensName ?? truncatedAddress) : "Connect Wallet"}
                          </button>
                        );
                      }}
                    </ConnectKitButton.Custom>
                    <p className="text-white/60 text-xs text-center lg:text-left mt-2">
                      Connect your wallet to see your status and which pool you qualify for. If
                      you're eligible for the Guaranteed Pool, your allocation will appear; if not,
                      you can still prepare to join the First-Come, First-Served phase.
                    </p>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}