import seedProducts from './seed/products.json';
import type { Product } from './types';

interface StoreState {
  products: Product[];
}

const initialState: StoreState = {
  products: seedProducts as Product[]
};

const globalForStore = globalThis as unknown as { travelopsStore?: StoreState };

function getStore(): StoreState {
  if (!globalForStore.travelopsStore) {
    globalForStore.travelopsStore = { ...initialState };
  }
  return globalForStore.travelopsStore;
}

async function loadPersistedProducts(): Promise<Product[] | null> {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  try {
    const fs = await import('fs/promises');
    const data = await fs.readFile('/tmp/travelops-products.json', 'utf-8');
    return JSON.parse(data) as Product[];
  } catch {
    return null;
  }
}

async function persistProducts(products: Product[]): Promise<void> {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  try {
    const fs = await import('fs/promises');
    await fs.writeFile('/tmp/travelops-products.json', JSON.stringify(products, null, 2));
  } catch {
    // Ignore persistence issues in serverless environments.
  }
}

export async function listProducts(): Promise<Product[]> {
  const store = getStore();
  if (store.products === initialState.products) {
    const persisted = await loadPersistedProducts();
    if (persisted) {
      store.products = persisted;
    }
  }
  return store.products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await listProducts();
  return products.find((product) => product.id === id);
}

export async function createProduct(input: Omit<Product, 'id' | 'updatedAt'>): Promise<Product> {
  const products = await listProducts();
  const product: Product = {
    ...input,
    id: `prod_${Math.random().toString(36).slice(2, 8)}`,
    updatedAt: new Date().toISOString()
  };
  const updated = [product, ...products];
  getStore().products = updated;
  await persistProducts(updated);
  return product;
}

export async function updateProduct(id: string, input: Partial<Omit<Product, 'id'>>): Promise<Product | null> {
  const products = await listProducts();
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return null;
  }
  const updatedProduct: Product = {
    ...products[index],
    ...input,
    updatedAt: new Date().toISOString()
  };
  const updated = [...products];
  updated[index] = updatedProduct;
  getStore().products = updated;
  await persistProducts(updated);
  return updatedProduct;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const products = await listProducts();
  const updated = products.filter((product) => product.id !== id);
  if (updated.length === products.length) {
    return false;
  }
  getStore().products = updated;
  await persistProducts(updated);
  return true;
}
