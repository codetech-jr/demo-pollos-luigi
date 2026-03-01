import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Pollos Luigi",
  description: "Pollo a la Broaster y Pizzas. ¡Sabor Brutal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 pt-20`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
