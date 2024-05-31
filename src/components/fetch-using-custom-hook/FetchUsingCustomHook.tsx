import useDataFetchQuery from "../../hooks/use-fetch-query/useDataFetchQuery";
import ProductCard from "../products/ProductCard";
import { StyledFetchUsingCustomHook } from "./FetchUsingCustomHook.style";

const FetchUsingCustomHook = () => {
  const { data, loading, error } = useDataFetchQuery<{ url: string }>(
    "https://dummyjson.com/products"
  );

  const getProductCards = (arr) => {
    return arr.map((prod, index: number) => {
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

  if (data && data.products) {
    return (
      <StyledFetchUsingCustomHook>
        <main className="home-page">
          <div className="grid-container">{getProductCards(data.products)}</div>
        </main>
      </StyledFetchUsingCustomHook>
    );
  }
  return null;
};

export default FetchUsingCustomHook;
