import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whats-new",
  description: "Get your style with whats-new",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}