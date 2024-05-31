import React from 'react'
import { ProductCardProps } from '../../types/products/product'
import AddToCart from './AddToCart';
import { StyledProductCard } from './ProductCard.style';

const ProductCard = ({id, category, brand, rating, price, tags, title, description, images}: ProductCardProps) => {
     const productImage= images && images[0];
     const cartData= {id, price, title, productImage, brand}
     

  return (
    <StyledProductCard>
    <div className='product-card border border-black'>
        <div className='img-container flex justify-center'>
            <img className="w-6/12 h-2/4 max-h-40" src={productImage} alt={title} />
        </div>
        <p className='flex justify-center'>{brand? `${brand} - ` :  ' ' }  {title}</p>
        
        <span className="product-category text-red-700">#{category}</span>

        <div className='product-tags flex flex-col'>{tags.map((tag, index) => {
            const key=`${index}-${tag}`
            return(<span key={key} className='bg-black text-white mb-2'>{` ${tag} `}</span>)
        })}</div>

        <div className="price-and-rating flex justify-around">
            <div>Price: {price}</div>
            <div>Rating: {rating}</div>
        </div>
        
        <div className="addToCart-container flex justify-center m-4">
            <AddToCart addToCartProps={cartData} />
        </div>
        
    </div>
    </StyledProductCard>
  )
}

export default ProductCard