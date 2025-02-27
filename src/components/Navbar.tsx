"use client"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
 import { useEffect } from "react";

const Navbar = () => {
 const pathname = usePathname();
 
 
  return (
<>
  <div className={`h-screen w-64 bg-gray-900 text-white fixed top-0 left-0 flex flex-col p-6 shadow-lg`}>
    
      <><h1 className="text-xl font-bold mb-6">Admin Panel</h1>
      <nav className="flex flex-col space-y-4">
        <Link
          href="/"
          className={`p-2 rounded-lg transition ${
            pathname === "/" ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/admin"
          className={`p-2 rounded-lg transition ${
            pathname.startsWith("/admin") ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/admin/contacts"
          className={`p-2 rounded-lg transition ${
            pathname.startsWith("/admin/contacts") ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          Contacts
        </Link>

        <Link
          href="/admin/challenges"
          className={`p-2 rounded-lg transition ${
            pathname.startsWith("/admin/challenges") ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          Challenges
        </Link>
    <LogoutLink       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
>
      Log Out
    </LogoutLink>
      </nav></>
     
       
    </div> 
    
    </>
  );
};

export default Navbar;
