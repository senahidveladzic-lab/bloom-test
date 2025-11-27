
import { cn } from "@/utils/general";

interface NFTCounterProps {
  current: number;
  total: number;
  className?: string;
}

export function NFTCounter({ current, total, className }: NFTCounterProps) {
  return (
    <div className={cn("text-center lg:text-left", className)}>
      <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
        {current}{" "}
        <span className="text-lg lg:text-xl font-normal text-white/60">
          of {total.toLocaleString()}
        </span>
      </div>
    </div>
  );
}