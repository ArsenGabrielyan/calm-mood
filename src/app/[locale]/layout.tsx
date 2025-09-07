import type { Metadata, Viewport } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-changer/theme-provider";
import { Raleway } from "next/font/google";
import localFont from 'next/font/local'
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { languages } from "@/i18n/config";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

const kamar = localFont({
  src: "../fonts/kamar.ttf",
  variable: "--font-kamar",
  fallback: ['Segoe UI','Tahoma','Geneva','Verdana','Arial','Helvetica','sans-serif'],
  adjustFontFallback: "Arial",
  preload: true
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["cyrillic","latin","cyrillic-ext","latin-ext"],
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("index");
  return {
    title: {
      absolute: `${t("appName")} (beta)`,
      template: `%s | ${t("appName")} (beta)`
    },
    description: t("appDescription"),
    alternates: {
      languages: Object.fromEntries(languages.map(l => [l.code, `/${l.code}`]))
    },
    authors: {
       url: "https://github.com/ArsenGabrielyan",
       name: t("author")
    },
    applicationName: t("appName"),
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: dark)",
          url: "/favicon-dark.ico",
          href: "/favicon-dark.ico"
        },
        {
          media: "(prefers-color-scheme: light)",
          url: "/favicon.ico",
          href: "/favicon.ico"
        },
        {
          media: "(prefers-color-scheme: dark)",
          url: "/app-dark.png",
          href: "/app-dark.png"
        },
        {
          media: "(prefers-color-scheme: light)",
          url: "/app-icon.png",
          href: "/app-icon.png"
        }
      ],
      apple: [
        {
          media: "(prefers-color-scheme: dark)",
          url: "/app-dark.png",
          href: "/app-dark.png"
        },
        {
          media: "(prefers-color-scheme: light)",
          url: "/app-icon.png",
          href: "/app-icon.png"
        }
      ],
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#2d5e0d"
}

interface RootLayoutProps{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}

export default async function RootLayout({
  children,
  params
}: Readonly<RootLayoutProps>) {
  const {locale} = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${kamar.variable} ${raleway.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
