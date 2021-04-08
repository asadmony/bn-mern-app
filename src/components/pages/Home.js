import React from 'react'
import data from './../../data'
import Product from './Product'

export default function Home() {
    return (
        <div>
            <div>
                Product List
            </div>
            <div>
                {data.products.map((product)=>(
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    )
}
