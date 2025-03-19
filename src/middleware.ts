import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
import { isUserAdmin } from "./lib/Database/IsAdmin/IsAdmin";

export default async function middleware(req: NextRequest) {
  try {
    const data: any = await isUserAdmin(); // Ensure this function handles request context properly
    console.log("Admin check data:", data);

    if (data && data[0] && data[0].name === "ADMIN") {
      return withAuth(req); // Ensure `withAuth(req)` returns a NextResponse
    } else {
      return NextResponse.redirect(new URL("/", req.url)); // Fix invalid URL issue
    }
  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.redirect(new URL("/error", req.url)); // Redirect to an error page if necessary
  }
}

export const config = {
  matcher: ["/admin"],
};
