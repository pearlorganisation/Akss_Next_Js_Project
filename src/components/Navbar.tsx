"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
 import { useEffect } from "react";

const Navbar = () => {
 const pathname = usePathname();
 const router = useRouter();
 const user = localStorage.getItem("isAdmin")
  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login");
    }else{
        router.push(`/admin`)
    }
  }, []);
  return (
<>
{user =="true" ? <div className={`h-screen w-64 ${user==="true"?"bg-gray-900":"bg-gray-100" }  text-white fixed top-0 left-0 flex flex-col p-6 shadow-lg`}>
    
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

    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        localStorage.removeItem("isAdmin");
        router.push("/");
      }}
    >
      Logout
    </button>
      </nav></>
     
       
    </div>: <></> }
    
    </>
  );
};

export default Navbar;
