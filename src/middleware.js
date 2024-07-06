import { NextResponse } from "next/server";

export const middleware = (request) => {
  const user = false;
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/services"], // can use matcher for multiple routes
};
