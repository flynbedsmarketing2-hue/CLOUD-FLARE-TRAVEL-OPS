import { NextResponse } from 'next/server';
import { createProduct, listProducts } from '@/lib/store';

export const runtime = 'edge';

export async function GET() {
  const products = await listProducts();
  return NextResponse.json({ data: products });
}

export async function POST(request: Request) {
  const body = await request.json();
  const product = await createProduct({
    name: body.name,
    destination: body.destination,
    price: Number(body.price),
    status: body.status
  });
  return NextResponse.json({ data: product }, { status: 201 });
}
