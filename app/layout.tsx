import type { Metadata } from "next";
import { Saira as FrontSans } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";

import Fotter from "./common/Fotter";

const fontSans = FrontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Summairazer - AI Powered PDF Summarization",
  description:
    "Save time and boost productivity with Summairazer, the AI-powered PDF summarization tool that delivers concise and accurate summaries in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1"> {children} </main>
          <Fotter />
        </div>
      </body>
    </html>
  );
}
