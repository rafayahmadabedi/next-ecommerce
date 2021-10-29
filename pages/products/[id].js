import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    const paths = products.map(
        product => ({
            params: {
                id: product.id.toString() 
            }
        })
    );

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    return {
        props: {
            product
        }
    }
}


function Product({ product }) {
    // const [product, setProduct] = useState({});
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(products => setProduct(products[0]));
    // }, []);

    return (
        <div className={styles.productDetail}>
            <h3>{product.title}</h3>
            <img src={product.image} alt=""></img>
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <p>{product.description}</p>
            
        </div>
    )
}

export default Product
