import { products } from '../../../models/products.json';

export async function get({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === Number(id));
  return new Response(JSON.stringify(product), {
    status: 200,
  });
}
