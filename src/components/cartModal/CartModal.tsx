import { addItemToCart, removeItemFromCart } from '../../redux/feature/cartSlice';
import {  useAppDispatch, useAppSelector } from '../../redux/redux-hooks'
import {  AppDispatch, RootState } from '../../redux/store';
import { StyledCartModal } from './CartModal.style'

type CartModalProps= {
    // eslint-disable-next-line @typescript-eslint/ban-types
    setShowModal: Function;
}
const CartModal = ({setShowModal}:CartModalProps) => {
    const cartData= useAppSelector((state:RootState) => state.cartData)
    const dispatch: AppDispatch = useAppDispatch()
    const isCartEmpty= cartData.cartItems.length === 0;
  return (
    <StyledCartModal>
        <div className="cart-modal border-2 bg-slate-600 border-black m-2">
           <div className="items-heading flex justify-between">
            <div className='flex justify-center w-full text-white underline'><h2>Item List :</h2></div>
            <div className="increment-quantity flex items-center m-2">
               <button className='w-7 h-7 border bg-gray-900  text-white rounded-full' onClick={() => setShowModal(false)}> X </button>
            </div>
            </div> 
           
            {isCartEmpty && (<h2 className='text-red-500'> Cart Is Empty</h2>)}

            {!isCartEmpty && cartData.cartItems.map((cartItem, index) => {
                const uniqueKey=  `${cartItem.id}-${index}`;
                const cartObj= cartItem;
                return (
                <div key={uniqueKey} className='border border-black rounded-2xl  p-2 m-2 flex justify-between bg-black'>
                    <div className="increment-quantity flex items-center m-2">
                        <button className='w-10 h-10 border bg-green-700 text-white rounded-full' onClick={() =>  dispatch(addItemToCart(cartObj))}> + </button>
                    </div>
                    <div className="cart-item-details w-full text-white flex flex-col">
                        <div className="name-and-brand flex flex-col">
                            <div className='flex justify-center'> <b> {cartItem.itemName} </b></div>
                            <div className='flex justify-center'> ({cartItem.itemBrand})</div>
                        </div>
                        <div className="quantity-and-price flex justify-between">
                            <div className='item-quanity ml-8'> Quantity: {cartItem.itemQuantity}</div>
                            <div className='item-price mr-8'> Price: {cartItem.itemPrice} </div>
                        </div>
                   
                    </div>
                   
                    <div className="decrement-quantity  flex items-center m-2">
                        <button className='w-10 h-10 border bg-red-700 text-white rounded-full' onClick={() =>  dispatch(removeItemFromCart(cartObj))}> - </button>
                    </div>
                </div>)
            })}

            {}
        </div>
    </StyledCartModal>
  )
}

export default CartModal