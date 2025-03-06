import { ProductView } from "app/app/components/product/ProductView/ProductView";
import { getProducts } from "app/service/shopify/products";
import { redirect } from 'next/navigation'

interface ProductPageProps {
  searchParams: {
    id: string
  }
}
export default async function ProductPage( {searchParams}: ProductPageProps ) {
  const id = searchParams.id;

  const products = await getProducts(id)
  const product = products[0];

  if(!id){
    redirect('/store');
  }
  return <ProductView product={product} />;
}