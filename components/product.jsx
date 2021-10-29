import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AddToCart from './addToCart'

function Product({ product }) {
    return (
        <div className={styles.product}>
            <Link href={`/products/${product.id}`}><a>
                <div className={styles.product__Row}>
                    <div className={styles.product__ColImg}>
                        <img src={product.image} alt=""></img>
                    </div>
                    <div className={styles.product__Col}>
                        {product.title}-${product.price}
                    </div>
                    <div className={styles.product__Col}>
                        <AddToCart product={product}/>
                    </div>
                </div>
            </a></Link>
        </div>
    )
}

export default Product
