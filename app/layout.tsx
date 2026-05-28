import type { Metadata, Viewport } from "next";
import {
  DM_Sans,
  DM_Serif_Display,
  IBM_Plex_Sans_Thai,
  JetBrains_Mono,
  Trirong,
} from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider, themeBootScript } from "@/lib/theme";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.GITHUB_PAGES === "true"
    ? "https://luckyz777.github.io/PortWeb"
    : "https://anirut-portfolio.vercel.app");

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

// Thai font pairings — used as fallbacks in the font stacks so the browser
// reaches for them only when a Thai glyph isn't covered by the Latin fonts.
const trirong = Trirong({
  subsets: ["thai"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-head-th",
  display: "swap",
});

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body-th",
  display: "swap",
});

const siteTitle = "Anirut Butnongwa | Mechanical Engineer & Software Developer";
const siteDescription =
  "Mechanical Engineering graduate from Suranaree University of Technology. Builds Python and web workflow tools for CNC, NC comparison, toolpath verification, and fixture management.";

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
    "Industrial Software Developer",
    "Automotive",
    "Precision Manufacturing",
    "Tool Room",
    "Lean Manufacturing",
    "CNC",
    "G-code",
    "PySide6",
    "Python",
    "React",
    "FastAPI",
    "NC Compare",
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFAF1" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1814" },
  ],
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const gaMeasurementId = /^G-[A-Z0-9]+$/i.test(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
)
  ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  : undefined;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${trirong.variable} ${plexThai.variable}`}
      suppressHydrationWarning
    >
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
        {gaMeasurementId && <GoogleAnalytics measurementId={gaMeasurementId} />}
      </body>
    </html>
  );
}
