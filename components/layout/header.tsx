import Image from "next/image";
import ConnectWalletButton from "@/components/common/connect-wallet-btn";
import SocialLinks from "@/components/common/social-links";

export default function Header() {
  return (
    <header>
      <div className="w-full">
        <nav className="mx-auto -mt-px flex w-full items-center justify-between px-6 py-5 md:px-8">
          <div className="flex h-8 items-center">
            <a className="flex items-center gap-2" href="https://bloom.social">
              <Image
                alt="Bloom Logo"
                width="154"
                height="32"
                priority={true}
                className="h-8 object-contain object-left"
                src="https://pulsarmoney.b-cdn.net/bloom/bloom-logo-text.svg"
              />
            </a>
          </div>

          <div className="flex items-center md:gap-3">
            <ConnectWalletButton variant="glass" icon="wallet" />
            <SocialLinks />
          </div>
        </nav>
      </div>
    </header>
  );
}
