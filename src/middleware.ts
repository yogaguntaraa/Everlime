import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyTokenJose } from "./helpers/token";
import { JWSInvalid } from "jose/errors";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get("authorization")?.value; // cookies mirip sama localstorage, buat nampung token

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (cookie) return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    if (!cookie) return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    console.log(cookie);
    if (!cookie) {
      // console.log("invalid token");
      return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
    }

    const [type, token] = cookie.split(" ");
    if (!type || !token) {
      console.log("invalid token");
      return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
    }

    try {
      const { id } = await verifyTokenJose(token);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("_id", id);

      return NextResponse.next({
        request: {
          // New request headers
          headers: requestHeaders,
        },
      });
    } catch (error) {
      if (error instanceof JWSInvalid) {
        return NextResponse.json({ message: "Invalid Token" }, { status: 401 });
      }
      console.log(error);
    }

    // if (!cookie) return NextResponse.redirect(new URL("/login", request.url));
    // return NextResponse.next();
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login/:path*",
    "/register/:path*",
    "/wishlist/:path*",
    "/api/wishlist/:path*",
  ], //route yang ingin di protect
};
