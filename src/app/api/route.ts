import { getProducts } from 'app/service/shopify/products';
export async function GET() {

  const products = await getProducts();

  return Response.json({ products });
}