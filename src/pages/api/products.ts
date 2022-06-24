import { products } from '../../models/products.json';

export async function get() {
  return new Response(JSON.stringify(products), {
    status: 200,
  });
}
