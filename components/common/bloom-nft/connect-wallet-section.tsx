import { cn } from "@/utils/general";
import ConnectWalletButton from "@/components/common/connect-wallet-btn";

interface ConnectWalletSectionProps {
  className?: string;
}

export function ConnectWalletSection({ className }: ConnectWalletSectionProps) {
  return (
    <div className={cn("mt-6", className)}>
      <ConnectWalletButton variant="primary" icon="check" className="w-full" />
      <p className="mt-2 text-center text-xs text-white/60 lg:text-left">
        Connect your wallet to see your status and which pool you qualify for.
        If you're eligible for the Guaranteed Pool, your allocation will appear;
        if not, you can still prepare to join the First-Come, First-Served
        phase.
      </p>
    </div>
  );
}
