import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "WOOD&STONE s.r.o.",
  description: "Dřevostavby, rekonstrukce, zemní práce a pergoly na Jesenicku. Realizujeme stavby v Adolfovicích, Jeseníku a okolí. Nezávazná poptávka zdarma.",
  keywords: [
    "dřevostavby Jeseník",
    "stavební firma Jesenicko",
    "rekonstrukce Jeseník",
    "zemní práce Bělá pod Pradědem",
    "zemní práce Jeseník",
    "nábytek Jeseník",
    "pergoly Jeseník",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}