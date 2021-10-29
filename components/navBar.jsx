import React, { useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { useRouter } from 'next/router'
import { CartContext } from "../context/cartContext";

function NavBar() {

    const router = useRouter();

    const { cart } = useContext(CartContext)

    const goBack = () => {
        router.back();
    }
    return (
        <div className={styles.nav}>
            {(router.pathname !== '/') &&
                <div className={styles.back}>
                    <a onClick={goBack}> {"<"} Back </a>
                </div>
            }
            <div className={styles.title}>
                <Link href="/">
                    <a>
                        <h1>Next E-Commerce</h1>
                    </a>
                </Link>
            </div>
            <div className={styles.auth}>
                <Link href="/cart"><a>Cart({cart.cartItems.length})</a></Link>
                <Link href="/products/add"><a>Add Product</a></Link>
            </div>
        </div>
    )
}

export default NavBar
