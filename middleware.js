import { NextResponse } from "next/server";

import json from './data.json';

console.log(json)

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/redirect", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about",
};
