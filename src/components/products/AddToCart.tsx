import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks'
import { AppDispatch, RootState } from '../../redux/store';
import { addItemToCart } from '../../redux/feature/cartSlice';

type CartDataProps= {
    addToCartProps: {
        id: number;
        price: number;
        title:string;
        productImage: string;
        brand: string;
    }
}


const AddToCart = ({addToCartProps}: CartDataProps) => {
  
  const dispatch: AppDispatch = useAppDispatch()
  const {id, price, title, productImage, brand}= addToCartProps;
  
    const clickHandler = (id:number, price: number) => {
        console.log('clickHandler : id', id);
        console.log('clickHandler : price', price);  
        const cartObj={
          id,
          itemName: title,
          itemQuantity: 1,
          itemPrice: price,
          itemBrand: brand,
          imageUrl: productImage,
        }
        dispatch(addItemToCart(cartObj));
    };


  return (
    <>
    <button className='border border-red-950 p-2' onClick={() =>clickHandler(id, price)}>Add To Cart</button>
    
    </>

  )
}

export default AddToCart