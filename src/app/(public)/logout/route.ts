import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL('/', request.url));
  response.cookies.set('travelops_session', '', {
    path: '/',
    maxAge: 0
  });
  return response;
}
