import { cn } from "@/utils/general";
import { EligibilityCard } from "@/components/common/bloom-nft/eligibility-card";
import { ConnectWalletSection } from "@/components/common/bloom-nft/connect-wallet-section";

interface EligibilityTabContentProps {
  className?: string;
}

export function EligibilityTabContent({
  className,
}: EligibilityTabContentProps) {
  return (
    <div className={cn(className)}>
      <EligibilityCard />
      <ConnectWalletSection />
    </div>
  );
}
