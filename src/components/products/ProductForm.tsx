'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import type { Product, ProductStatus } from '@/lib/types';
import { Button } from '@/components/Button';

interface ProductFormProps {
  mode: 'create' | 'edit';
  product?: Product;
}

export function ProductForm({ mode, product }: ProductFormProps) {
  const router = useRouter();
  const [name, setName] = useState(product?.name ?? '');
  const [destination, setDestination] = useState(product?.destination ?? '');
  const [price, setPrice] = useState(product?.price?.toString() ?? '');
  const [status, setStatus] = useState<ProductStatus>(product?.status ?? 'draft');
  const [isSaving, setIsSaving] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);

    const payload = {
      name,
      destination,
      price: Number(price),
      status
    };

    const response = await fetch(
      mode === 'create' ? '/api/products' : `/api/products/${product?.id}`,
      {
        method: mode === 'create' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    if (response.ok) {
      const data = await response.json();
      router.push(`/dashboard/products/${data.data.id}`);
      router.refresh();
    }

    setIsSaving(false);
  };

  const remove = async () => {
    if (!product) return;
    setIsSaving(true);
    const response = await fetch(`/api/products/${product.id}`, { method: 'DELETE' });
    if (response.ok) {
      router.push('/dashboard/products');
      router.refresh();
    }
    setIsSaving(false);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-ink">Product name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="rounded-xl border border-black/10 px-4 py-3"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-ink">Destination</span>
          <input
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            required
            className="rounded-xl border border-black/10 px-4 py-3"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-ink">Price (USD)</span>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
            type="number"
            min="0"
            className="rounded-xl border border-black/10 px-4 py-3"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-ink">Status</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as ProductStatus)}
            className="rounded-xl border border-black/10 px-4 py-3"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={isSaving}>
          {isSaving ? 'Saving...' : mode === 'create' ? 'Create Product' : 'Save Changes'}
        </Button>
        {mode === 'edit' && (
          <Button type="button" variant="secondary" onClick={remove} disabled={isSaving}>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
}
