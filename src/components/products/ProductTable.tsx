'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/types';

export function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.data as Product[]);
    };

    load();
  }, []);

  const filtered = useMemo(() => {
    const lower = query.toLowerCase();
    return products.filter((product) =>
      [product.name, product.destination, product.status].some((value) =>
        value.toLowerCase().includes(lower)
      )
    );
  }, [products, query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Products</h1>
          <p className="mt-2 text-sm text-black/70">
            Track travel offerings and keep pricing, destinations, and status up to date.
          </p>
        </div>
        <Link
          href="/dashboard/products/new"
          className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-soft"
        >
          New Product
        </Link>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products"
            className="w-full rounded-full border border-black/10 px-4 py-2 text-sm md:max-w-sm"
          />
          <p className="text-xs text-black/60">{filtered.length} products</p>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-black/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-black/5 text-xs uppercase tracking-[0.2em] text-black/60">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Updated</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-t border-black/10">
                  <td className="px-4 py-3">
                    <div className="font-semibold text-ink">{product.name}</div>
                    <div className="text-xs text-black/60">{product.destination}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70">
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-black/70">
                    {new Date(product.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/dashboard/products/${product.id}`}
                      className="text-xs font-semibold text-ink hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
