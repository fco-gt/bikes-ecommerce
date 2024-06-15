import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";

import localFont from "next/font/local";

import HeaderNav from "@/components/HeaderNav";
import Footer from "@/sections/layout/footer";
import ShopingCart from "@/components/ShopingCart";
import ScrollButton from "@/components/ScrollButton";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const biker = localFont({
  src: "../fonts/Biker.woff2",
  display: "swap",
  variable: "--font-biker",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          biker.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <header>
            <HeaderNav />
          </header>
          <div className="relative flex flex-col h-screen">
            <ShopingCart />
            <main className="container mx-auto max-w-7xl pt-16 px-5 flex-grow">
              <ScrollButton />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
              <ToastContainer />
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
