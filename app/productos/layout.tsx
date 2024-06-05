"use client";
import { FooterDev } from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      {/*<FooterDev />*/}
    </div>
  );
}
