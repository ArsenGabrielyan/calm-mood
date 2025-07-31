import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-changer/theme-provider";
import { Raleway } from "next/font/google";
import localFont from 'next/font/local'

const kamar = localFont({
  src: "./fonts/kamar.ttf",
  variable: "--font-kamar",
  fallback: ['Segoe UI','Tahoma','Geneva','Verdana','Arial','Helvetica','sans-serif'],
  adjustFontFallback: "Arial",
  preload: true
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["cyrillic","latin","cyrillic-ext","latin-ext"],
})

export const metadata: Metadata = {
  title: "Հանգիստ Տրամադրություն",
  description: "Եթե դուք ունեք սթրես, լարվածություն կամ դեպրեսիա, դուք ճիշտ տեղ եք եկել: Լսե՛ք և վայելեք:",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kamar.variable} ${raleway.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
