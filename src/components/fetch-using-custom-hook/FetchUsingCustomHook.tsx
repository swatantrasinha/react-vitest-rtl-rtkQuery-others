import useDataFetchQuery, { RawDataType } from "../../hooks/use-fetch-query/useDataFetchQuery";
import { ProductCardProps } from "../../types/products/product";
import ProductCard from "../products/ProductCard";
import { StyledFetchUsingCustomHook } from "./FetchUsingCustomHook.style";




const FetchUsingCustomHook = () => {
  const { data  , loading, error } = useDataFetchQuery(
    "https://dummyjson.com/products"
  );

  const getProductCards = (arr:ProductCardProps[]) => {
    console.log('getProductCards => arr', arr);
    
    return arr.map((prod: ProductCardProps, index: number) => {
      const uniqueKey = `${prod.id}-${prod.title}-${index}`;
      return (
        <div key={uniqueKey}>
          <ProductCard {...prod} />
        </div>
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
const {products} = data as RawDataType;

  if (products) {
    return (
      <StyledFetchUsingCustomHook>
        <main className="home-page">
          <div className="grid-container">{getProductCards(products)}</div>
        </main>
      </StyledFetchUsingCustomHook>
    );
  }
  return null;
};

export default FetchUsingCustomHook;
