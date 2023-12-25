import AnalyticsUmamiSetup from "@/components/analytics-umami-setup";
import LayoutNav from "@/components/layout-nav";
import { ThemeProvider } from "@/components/theme-provider";
import CTAMobile from "@/components/modal-contact-me-mobile";
import LayoutFooter from "@/components/layout-footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rubenodegard.com"),
  openGraph: {
    images: "/opengraph-image.png",
  },
  title: {
    default: "Ruben Odegard - Developer Portfolio",
    template: "%s - Ruben Odegard",
  },
  description:
    "Developer Portfolio by Ruben Odegard / Ruben Oedegaard / Ruben Ødegård. Based in Oslo, Norway.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://umami-db-liard.vercel.app/script.js"
          data-website-id="a03fe882-c537-4d64-95f0-45c14e5be03d"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <AnalyticsUmamiSetup />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 bg-background/90 md:bg-background/50 backdrop-blur-lg shadow-md ">
            <LayoutNav />
          </header>

          <CTAMobile />
          {children}
          <LayoutFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
