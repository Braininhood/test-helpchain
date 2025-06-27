import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelpChain - Ukrainian Employment Integration Portal",
  description: "Connecting Ukrainian professionals with opportunities across the UK. Join us in building bridges to meaningful employment, training, and business opportunities.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
