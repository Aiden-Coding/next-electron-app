import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/app-bar";
import StoreProvider from "@/store/StoreProvider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "NEXT ELECTRON APP",
  description: "NEXT ELECTRON APP,APP ROUTE",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <StoreProvider>
          <Menu />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
