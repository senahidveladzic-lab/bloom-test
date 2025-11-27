"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { m } from "framer-motion";
import { TabButton } from "@/components/common/bloom-nft/tab-button";
import { cn } from "@/utils/general";

export interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function TabNavigation({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabNavigationProps) {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef(new Map<string, HTMLButtonElement>());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateIndicator = () => {
    const activeTabElement = tabsRef.current.get(activeTab);
    const scrollContainer = scrollContainerRef.current;

    if (activeTabElement && scrollContainer) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft - scrollContainer.scrollLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  };

  useEffect(() => {
    updateIndicator();
  }, [activeTab]);

  return (
    <div className={cn("-mx-4 lg:-mx-6", className)}>
      <div className="overflow-hidden px-4 lg:px-0">
        <div className="relative">
          <div
            className="scrollbar-hide overflow-x-auto"
            ref={scrollContainerRef}
            onScroll={updateIndicator}
          >
            <div className="inline-flex gap-1 pb-2">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  icon={tab.icon}
                  isActive={activeTab === tab.id}
                  onClick={() => onTabChange(tab.id)}
                  innerRef={(el) => {
                    if (el) {
                      tabsRef.current.set(tab.id, el);
                    } else {
                      tabsRef.current.delete(tab.id);
                    }
                  }}
                />
              ))}

              {/* Animated Indicator */}
              <m.div
                className="pointer-events-none absolute bottom-0 h-0.5 bg-white"
                initial={false}
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            </div>
          </div>
          {/* Bottom Border */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </div>
      </div>
    </div>
  );
}
