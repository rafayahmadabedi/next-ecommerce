import React from 'react'
import Product from './product'

const ProductList = ({ products }) => {

    return (
        <div>
            {/* <h3>Products List</h3> */}
            {products.map(
                product => (
                    <Product key={product.id} product={product} />
                )
            )}
        </div>
    )
}

export default ProductList
