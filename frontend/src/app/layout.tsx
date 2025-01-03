import "./globals.css";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import { cn } from "@/lib/utils";

import { Footer } from "@/components/footer";
import { HeaderWrapper } from "@/components/header-wrapper";
import { MenuProvider } from "@/contexts/menu-context";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surf, Kayak and Boat Tour operator in Whangamata",
  description:
    "The only certified activity provider in Whangamata, offering surf, kayak and boat tours to Whenuakura - Donut- Island.",
};

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/global";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      topNav: {
        populate: "*",
      },
      footer: {
        populate: "*",
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const data = await fetchData(url.href);
  return data;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await loader();
  const { topNav, footer } = data?.data;

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <MenuProvider>
          <HeaderWrapper data={topNav} />
          {children}
          <Footer data={footer} />
        </MenuProvider>
      </body>
    </html>
  );
}
