import { Wallet } from "lucide-react";
import { cn } from "@/utils/general";

interface EligibilityCardProps {
  className?: string;
}

export function EligibilityCard({ className }: EligibilityCardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-2xl p-4",
        "bg-white/[0.18] backdrop-blur-[6.8px]",
        "border border-white/[0.5] shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 rounded-full bg-white/10 p-2.5">
          <Wallet className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-base font-medium text-white">
            Check Your Eligibility
          </h3>
          <div className="text-xs text-white/60">
            Connect wallet to see if you're eligible for the Guaranteed Pool or
            First Come, First Served
          </div>
        </div>
      </div>
    </div>
  );
}
