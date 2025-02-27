"use client"

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin"); // Check if inside /admin

  if (isAdminRoute) return null; // Hide footer on admin routes

  return <Footer />;
}