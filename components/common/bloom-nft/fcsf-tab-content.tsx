import { cn } from "@/utils/general";
import { TimeCard } from "@/components/common/bloom-nft/time-card";

interface FCFSTabContentProps {
  className?: string;
}

export function FCFSTabContent({ className }: FCFSTabContentProps) {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      <div className="flex gap-4">
        <TimeCard label="Start" time="TBA" date="TBA" />
        <TimeCard label="End" time="TBA" date="TBA" />
      </div>
      <p className="text-xs text-white/60 lg:text-sm">
        Open to everyone on a first-come, first-served basis. This includes any
        unclaimed allocations from the Guaranteed Pool. Minting begins as soon
        as this phase opens, so be ready!
      </p>
    </div>
  );
}
