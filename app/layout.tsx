import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeeSlayer / FeeSlayers | Built by humans. Sharpened by AI.",
  description:
    "FeeSlayer (Canada): compliant payment surcharging so you keep every dollar. FeeSlayers (US): the full growth bundle at $99/mo. Built by humans. Sharpened by AI.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
