import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { ProvidersDynamicWrapper } from "@/lib/providers-dynamic-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Bloom OG Pass",
  description:
    "A limited edition collector's item for the Bloom OGs. Congratulations on being early.",
  openGraph: {
    title: "Bloom OG Pass",
    description:
      "A limited edition collector's item for the Bloom OGs. Congratulations on being early.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom OG Pass",
    description:
      "A limited edition collector's item for the Bloom OGs. Congratulations on being early.",
  },
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/x-icon",
      sizes: "49x48",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ProvidersDynamicWrapper>
          <Header />
          <main>{children}</main>
        </ProvidersDynamicWrapper>
      </body>
    </html>
  );
}
