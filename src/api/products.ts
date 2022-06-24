function getOrigin(request: Request): string {
  return new URL(request.url).origin.replace('localhost', '127.0.0.1');
}

async function get(req: Request, endpoint: string): Promise<any> {
  const response = await fetch(`${getOrigin(req)}${endpoint}`, {
    credentials: 'same-origin',
  });
  if (!response.ok) {
    return null;
  }
  return response;
}

export async function fetchProducts(req: Request) {
  const response = await get(req, '/api/products');
  return await response.json();
}

export async function fetchProduct(req: Request, id: number) {
  const response = await get(req, `/api/products/${id}`);
  return await response.json();
}
