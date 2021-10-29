import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer'

export const CartContext = createContext();

const initialState = {
    cartItems: []
}

function CartContextProvider({ children }) {

    const [cart, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
