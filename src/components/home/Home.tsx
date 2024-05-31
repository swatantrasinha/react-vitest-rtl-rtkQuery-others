import { useGetAllProductsQuery } from '../../redux/feature/productsSlice';
import { StyledHomePage } from './Home.style';
import ProductCard from '../products/ProductCard';

const Home = () => {

  const {isLoading, data} = useGetAllProductsQuery(``);
  console.log(isLoading , data);
  
  return (
    <StyledHomePage>
    <main className='home-page'>
       <div className="grid-container">
        {!isLoading && data && data.products.map((prod, index) => {
          const uniqueKey= `${prod.id}-${prod.title}-${index}`;
          return (
          <div key={uniqueKey}>
            <ProductCard {... prod}/>
            </div>
          )
        })}
       </div>
      </main>
      </StyledHomePage>
  )
}

export default Home