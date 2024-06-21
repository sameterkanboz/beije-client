import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //if route is / then redirect to /current-package

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/custom-packet", request.url));
  }

  return NextResponse.next();
}
