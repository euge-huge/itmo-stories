import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import ky from 'ky';

export async function middleware(request: NextRequest) {
  let isAuth;

  try {
    const res = await ky.get('http://localhost:3000/api/auth/me', {
      credentials: 'include',
      headers: request.headers,
    });

    isAuth = res.ok;
  } catch {
    isAuth = false;
  }

  if (isAuth) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: '/stories/create',
};
