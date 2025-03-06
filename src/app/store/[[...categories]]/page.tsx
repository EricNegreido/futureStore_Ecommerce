import { ProductsWrapper } from "app/app/components/Store/ProductsWrapper/ProductsWrapper";
import { getCollections, getCollectionsProducts } from "app/service/shopify/collections";
import { getProducts } from "app/service/shopify/products";

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {

  const { categories } = props.params;

  let products = [];

  const colletions = await getCollections();

  if (categories?.length > 0) {
    const selectedCollections = colletions.find((collection: collection) => collection.handle == categories[0]).id
    products = await getCollectionsProducts(selectedCollections);
  } else {
    products = await getProducts();

  }

  return (
    <ProductsWrapper products={products} />
  )
}