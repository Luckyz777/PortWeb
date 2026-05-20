import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider, themeBootScript } from "@/lib/theme";
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

const siteTitle = "Anirut Butnongwa | Mechanical Engineer & Software Developer";
const siteDescription =
  "Mechanical Engineering graduate from Suranaree University of Technology. Builds production-tested Python and web tools for CNC, toolpath verification, and fixture workflows.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: "Anirut Butnongwa Portfolio",
  authors: [{ name: "Anirut Butnongwa", url: siteUrl }],
  creator: "Anirut Butnongwa",
  keywords: [
    "Mechanical Engineer",
    "Process Engineer",
    "Manufacturing Software",
    "CNC",
    "G-code",
    "PySide6",
    "Python",
    "React",
    "FastAPI",
    "Suranaree University of Technology",
    "Thailand",
    "Fresh Graduate 2026",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Anirut Butnongwa",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffced" },
    { media: "(prefers-color-scheme: dark)", color: "#0E100E" },
  ],
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
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
