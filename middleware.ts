import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '~/lib/supabase/server-client';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });

  // Create a new Supabase client
  const supabase = await createClient();

  // Get the user from the session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // If user is signed in and tries to access /sign-in, redirect to home
  if (user && pathname === '/sign-in') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // If no user and not on sign-in page, redirect to sign-in
  if (!user && pathname !== '/sign-in') {
    const url = request.nextUrl.clone();
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
