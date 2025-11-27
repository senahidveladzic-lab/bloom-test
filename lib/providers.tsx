"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { LazyMotion, domAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(
        `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
      ),
    },
    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    // Required App Info
    appName: "Bloom Test",
    // Optional App Info
    appDescription: "Some test description!",
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
    appIcon: process.env.NEXT_PUBLIC_APP_LOGO, // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider mode="light">
          <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
