import Link from 'next/link';
import { ProductForm } from '@/components/products/ProductForm';

export default function NewProductPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">New Product</h1>
          <p className="mt-2 text-sm text-black/70">Create a new travel offering.</p>
        </div>
        <Link href="/dashboard/products" className="text-sm text-black/70 hover:text-ink">
          Back to products
        </Link>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
        <ProductForm mode="create" />
      </div>
    </div>
  );
}
