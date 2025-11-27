import { ReactNode } from "react";
import { cn } from "@/utils/general";

interface TabButtonProps {
  id: string;
  label: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
  innerRef: (el: HTMLButtonElement | null) => void;
  className?: string;
}

export function TabButton({
  id,
  label,
  icon,
  isActive,
  onClick,
  innerRef,
  className,
}: TabButtonProps) {
  return (
    <button
      ref={innerRef}
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-2 px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors",
        "!outline-none focus:!outline-none focus-visible:!outline-none",
        isActive ? "text-white" : "text-white/60 hover:text-white/80",
        className,
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
