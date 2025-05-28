import "./globals.css";
import { SidebarToggleProvider } from "@/app/components/SidebarToggleContext";
import { CartProvider } from "@/app/components/CartContext";
import ClientLayout from "@/app/components/ClientLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SidebarToggleProvider>
            <ClientLayout>{children}</ClientLayout>
          </SidebarToggleProvider>
        </CartProvider>
      </body>
    </html>
  );
}