import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PillProps {
  text: string;
  className?: string;
}

export default function Pill({ text, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#FFFFFF26] bg-[#FFFFFF0D] px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-[150px] md:px-4 md:py-2 md:text-sm",
        className,
      )}
    >
      {text}
    </span>
  );
}
