import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Digest",
  description:
    "NoteCrush: Summarise large and small texts with Note Digest. The new AI based note summarisation tool. Built for everyone. Transform your lecture notes and textbooks into concise study guides, making revision more efficient. Discover insights from millions of unread lines and thousands of texts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className + " bg-white"}>
        <NavBar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
