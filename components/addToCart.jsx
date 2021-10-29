import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/cartContext';
import * as actions from '../reducers/action'

function AddToCart({ product }) {
    const [inCart, setInCart] = useState(false);
    const [quantity, setQuantity] = useState(false);

    const {cart, dispatch} = useContext(CartContext);

    useEffect(() => {
        const itemInCart = cart.cartItems.find(item => item.id === product.id);
        if (itemInCart) {
            setQuantity(itemInCart.quantity);
        }
        else {
            setQuantity(0);
        }
    }, [cart])

    const addToCart = (e) => {
        e.preventDefault();

        dispatch( actions.ITEM_ADDED(product) );
        
        setInCart(!inCart);
    }
    const removeFromCart = (e) => {
        e.preventDefault();

        dispatch( actions.ITEM_REMOVED(product) );

        setInCart(!inCart);
    }
    const incrementQuantity = (e) => {
        e.preventDefault();

        dispatch( actions.QUANTITY_INCREMENT(product) );
    }
    const decrementQuantity = (e) => {
        e.preventDefault();

        dispatch( actions.QUANTITY_DECREMENT(product) );
    }

    return (
        (quantity===0) && 
        <button className="btn btn-sm btn-primary" onClick={(e) => addToCart(e)}>Add To Cart</button>
    ) || (
        (quantity>0) &&
        <div>
            <button className="btn btn-sm btn-primary" onClick={(e) => removeFromCart(e)}>Remove</button>
            <button onClick={(e) => decrementQuantity(e)}>-</button>
                {quantity}
            <button onClick={(e) => incrementQuantity(e)}>+</button>
        </div>
    )
}

export default AddToCart
