"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import X from "../../public/x.png";
import Fb from "../../public/fb.png";
import Mail from "../../public/mail.png";
import Linkin from "../../public/linkdn.png";
import Image from "next/image";

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function fetchAuthStatus() {
      const res = await fetch("/api/auth-status");
      const data = await res.json();
      setIsLoggedIn(data.isLoggedIn);
    }
    fetchAuthStatus();
  }, []);

  return (
    <footer className="bg-[#d9d9d9] border-t">
      <div className="bg-[#d9d9d9] px-16 pb-4">
        <div className="grid gap-12 md:grid-cols-3 mb-12 pt-12">
          <div className="space-y-4">
            <h3 className="font-semibold font-michroma text-[#001A72] text-6xl mb-2">
              {" "}
              iona.ai
            </h3>
         
            <div className="pt-2">
             
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-gray-500 hover:text-blue-600 shadow-md transition-colors duration-200"
                >
                  <Image src={Fb} className="" alt="FB" />
                </a>

                <a
                     href="https://www.x.com"
                     target="_blank"
                     rel="noopener"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-gray-500 hover:text-blue-600 shadow-md transition-colors duration-200"
                >
                 <Image src={X} className="" alt="X" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                    target="_blank"
                     rel="noopener"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-gray-500 hover:text-blue-600 shadow-md transition-colors duration-200"
                >
                <Image src={Linkin} className="" alt="Linkiden" />
                </a>


                <a
                  href="mailto:help@iona.ai"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-gray-500 hover:text-blue-600 shadow-md transition-colors duration-200"
                >
                 <Image src={Mail} className="" alt="My Mail" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-3">
            <h3 className="font-semibold text-lg mb-4">London Office</h3>
            <div className="flex items-start gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-gray-600 ">
                <p>128 City Road</p>
                <p>London, United Kingdom</p>
                <p>EC1V 2NX</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 ">
            <h3 className="font-semibold text-lg mb-4">Noida Office</h3>
            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="text-gray-600">
                <p>1204, World Trade Tower</p>
                <p>Central Auto Market Block B</p>
                <p>Sector 16, Noida</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 iona.ai. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
              >
                Terms of Service
              </a>
              {!isLoggedIn ? (
                <LoginLink className="text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
                  Admin Sign In
                </LoginLink>
              ) : (
                <LogoutLink className="text-sm py-2 px-4 border border-gray-300 hover:bg-gray-100 rounded-md transition-colors duration-200">
                  Sign Out
                </LogoutLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
