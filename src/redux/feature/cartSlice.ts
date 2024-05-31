import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItemType= {
    id: number;
    itemName: string;
    itemQuantity: number;
    itemPrice: number;
    itemBrand: string;
}

type InitialStateType= {
    cartItems: CartItemType[] | []
};

const initialState: InitialStateType = {
    cartItems: []
};


export const cartReducer= createSlice({
    name: 'cartData',
    initialState,
    reducers:{
        addItemToCart(state, action:PayloadAction<CartItemType>){
            const currentItems= state.cartItems;
            const findIndex= currentItems.findIndex(ele => ele.id === action.payload.id)
                        
            if((state.cartItems.length == 0) || (findIndex === -1)) {
                state.cartItems.push(action.payload);
            } else {
                console.log('itemInCart => ', findIndex);
                const currentQuantity= state.cartItems[findIndex].itemQuantity;
                state.cartItems[findIndex] = {
                    ...state.cartItems[findIndex], 
                    itemQuantity:  currentQuantity + 1
                }
            }
            
        },

        removeItemFromCart(state, action:PayloadAction<CartItemType>){
            const currentItems= state.cartItems;
            const findIndex= currentItems.findIndex(ele => ele.id === action.payload.id)
                        
            if((state.cartItems.length == 0) || (findIndex === -1)) {
                return; // this will not happen 
            } else {
                const currentQuantity= state.cartItems[findIndex].itemQuantity;
                if(currentQuantity > 1) {
                    state.cartItems[findIndex] = {
                        ...state.cartItems[findIndex], 
                        itemQuantity:  currentQuantity - 1
                    }
                } else {
                    state.cartItems = state.cartItems.filter(ele => ele.id !== action.payload.id)
                }
              
            }
            
        },
    }
});

export const { addItemToCart,removeItemFromCart } = cartReducer.actions;