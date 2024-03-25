import ClientOnly from "@/components/ClientOnly";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientOnly>
            {children}
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
