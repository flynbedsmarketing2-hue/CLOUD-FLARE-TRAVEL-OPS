import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL('/dashboard', request.url));
  response.cookies.set('travelops_session', 'dev', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax'
  });
  return response;
}
