import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.GITHUB_PAGES === "true"
  ? "https://luckyz777.github.io/PortWeb"
  : "https://luckyz777.github.io";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-head",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anirut Butnongwa | Industrial Software Portfolio",
  description:
    "Mechanical engineering graduate building Python and web tools for CNC, toolpath, and fixture workflows.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Anirut Butnongwa | Industrial Software Portfolio",
    description:
      "GT-ACT, GT-PATH, and GT-FIXSYS — three working tools from a mechanical engineering internship.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F7F4EF",
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
