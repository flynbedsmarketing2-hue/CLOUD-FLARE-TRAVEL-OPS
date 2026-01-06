import { NextResponse } from 'next/server';
import { deleteProduct, getProduct, updateProduct } from '@/lib/store';

interface Params {
  params: { id: string };
}

export async function GET(_request: Request, { params }: Params) {
  const product = await getProduct(params.id);
  if (!product) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ data: product });
}

export async function PUT(request: Request, { params }: Params) {
  const body = await request.json();
  const updated = await updateProduct(params.id, {
    name: body.name,
    destination: body.destination,
    price: body.price !== undefined ? Number(body.price) : undefined,
    status: body.status
  });
  if (!updated) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ data: updated });
}

export async function DELETE(_request: Request, { params }: Params) {
  const removed = await deleteProduct(params.id);
  if (!removed) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
