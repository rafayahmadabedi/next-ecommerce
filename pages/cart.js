import React, {useContext, useEffect, useState} from 'react'
import {CartContext} from '../context/cartContext'

export const getStaticProps = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
  
    return {
      props: {
        products
      }
    }
  }

function Cart({ products }) {
    const {cart} = useContext(CartContext);

    const [cartItems, setCartItems] = useState({cartItems:[], total:0});

    useEffect(() => {
        const updatedCart = {
            cartItems: [],
            total: 0
        }
        updatedCart.cartItems = cart.cartItems.map(
            item => {
                const itemInCart = products.find( product => product.id === item.id);
                const itemTotal = item.quantity*itemInCart.price;
                updatedCart.total = updatedCart.total + itemTotal;
                return {...itemInCart, quantity: item.quantity, itemTotal: itemTotal}
            }
        );

        setCartItems(updatedCart);
    }, [cart]);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.cartItems.map(
                    item => (
                        <li key={item.id}> 
                            {item.title} - ${item.price} x {item.quantity} = <b>Item Total</b> ${item.itemTotal} 
                        </li>
                    )
                )}
            </ul>
            
            {(cartItems.cartItems.length>0) &&
                <b>Total: ${cartItems.total}</b>
                ||
                <h3>Please add items in cart</h3>
                }
        </div>
    )
}

export default Cart
