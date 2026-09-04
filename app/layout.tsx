import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/site-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const description =
  "Business development for shops and contractors: get found, get the phone ringing, get the customer to yes, and keep the full ticket.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "FeeSlayers",
    template: "%s | FeeSlayers",
  },
  description,
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_US",
    url: company.url,
    title: company.name,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
