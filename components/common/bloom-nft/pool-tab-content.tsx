import { cn } from "@/utils/general";
import { TimeCard } from "@/components/common/bloom-nft/time-card";

interface PoolTabContentProps {
  className?: string;
}

export function PoolTabContent({ className }: PoolTabContentProps) {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      <div className="flex gap-4">
        <TimeCard label="Start" time="TBA" date="TBA" />
        <TimeCard label="End" time="TBA" date="TBA" />
      </div>
      <p className="text-xs text-white/60 lg:text-sm">
        Claim up to your guaranteed allocation at any time during the phase—no
        rush or gas wars. Any unclaimed allocation automatically rolls into the
        First-Come, First-Served pool when this window ends.
      </p>
    </div>
  );
}
