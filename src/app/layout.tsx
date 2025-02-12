import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Special_Elite, Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "web3creator.xyz | We care about DeFi",
  description:
    "web3creator.xyz builds innovative and open source smart contracts for DeFi. We help people to enjoy a secure and user-friendly DeFi utility. Our single sided staking solutions and token launcher will make you and your community happy.",
  manifest: "./favicon/site.webmanifest",
  icons: {
    icon: "./favicon/favicon-32x32.png",
    shortcut: "./favicon/favicon-32x32.png",
    apple: "./favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${specialElite.variable} ${ubuntu.variable} ${ubuntuMono.variable} antialiased`}
        style={{
          background:
            "radial-gradient(circle, var(--background-radial) 0%, var(--background) 45%)",
          backgroundPositionY: "-90px",
        }}
      >
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}
