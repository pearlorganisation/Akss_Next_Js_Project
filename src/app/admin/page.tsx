"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login");
    }
  }, []);

  return (
    <div className="flex justify-center">
    <h1>Nothing here for now</h1>
    </div>
  );
}
