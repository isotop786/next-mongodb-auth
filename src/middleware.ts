import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // define public path
    const isPublicPath = path === "/login" || path === "/signup" || path === '/verifyemail'
    
    // getting token from the cookies
    const token = request.cookies.get('token')?.value || ''

    // Redirect logic based on the path and token presence

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/posts',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}