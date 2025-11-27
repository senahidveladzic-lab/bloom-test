"use client";
import { ConnectKitButton } from "connectkit";
import { Wallet, Check } from "lucide-react";
import { cn } from "@/utils/general";

const icons = {
  wallet: Wallet,
  check: Check,
} as const;

type IconType = keyof typeof icons;

interface ConnectWalletButtonProps {
  variant?: "glass" | "primary";
  icon?: IconType;
  className?: string;
}

export default function ConnectWalletButton({
  variant = "glass",
  icon,
  className,
}: ConnectWalletButtonProps) {
  const variantStyles = {
    glass:
      "rounded-full border border-white/10 bg-[#FFFFFF0A] px-4 py-1.5 text-sm font-medium text-white shadow-lg backdrop-blur-md hover:bg-white/10",
    primary:
      "rounded-full bg-primary px-4 py-2 text-base font-medium text-white shadow-lg hover:bg-primary/90",
  };

  const Icon = icon ? icons[icon] : null;

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <button
            onClick={show}
            className={cn(
              "flex cursor-pointer items-center justify-center gap-2 transition-all",
              variantStyles[variant],
              className,
            )}
          >
            {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
            {isConnected ? (ensName ?? truncatedAddress) : "Connect Wallet"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
