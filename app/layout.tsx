import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Dominic Cobb",
  description: "Dominic Cobb's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <GoogleAnalytics measurementId="G-3DDB8Q0WXZ" />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
