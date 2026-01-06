import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductForm } from '@/components/products/ProductForm';
import { getProduct } from '@/lib/store';

export const runtime = 'edge';

interface PageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">{product.name}</h1>
          <p className="mt-2 text-sm text-black/70">Update destination, pricing, and status.</p>
        </div>
        <Link href="/dashboard/products" className="text-sm text-black/70 hover:text-ink">
          Back to products
        </Link>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
        <ProductForm mode="edit" product={product} />
      </div>
    </div>
  );
}
