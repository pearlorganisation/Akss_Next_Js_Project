"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
  
function Footer() {
 const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        async function fetchAuthStatus() {
            const res = await fetch("/api/auth-status");
            const data = await res.json();
            setIsLoggedIn(data.isLoggedIn);
        }
        fetchAuthStatus();
    }, []);

  return (
    <div> 
      <footer className="border-t">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-2">
              <a href="mailto:help@iona.ai" className="text-sm hover:underline">
                help@iona.ai
              </a>
              <div className="flex gap-4">
                <a href="#" className="text-sm hover:underline">
                  Facebook
                </a>
                <a href="#" className="text-sm hover:underline">
                  Twitter/X
                </a>
                <a href="#" className="text-sm hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p>128 City Road</p>
              <p>London, United Kingdom</p>
              <p>EC1V 2NX</p>
            </div>

            <div className="space-y-1 text-sm">
              <p>1204, World Trade Tower</p>
              <p>Central Auto Market Block B</p>
              <p>Sector 16, Noida</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <p className="text-sm text-muted-foreground">2023 © iona.ai</p>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
          <div>
             {!isLoggedIn? <LoginLink>Sign In</LoginLink>:<LogoutLink>Sign Out</LogoutLink>}
          </div>
        </div>
      </footer></div>
  )
}

export default Footer