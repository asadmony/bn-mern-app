import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Product from './Product'

export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/data/all');
            setProducts(data)
        };
        fetchData();
    }, [])
    return (
        <div>
            <div>
                Product List
            </div>
            <div>
                {products.map((product)=>(
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    )
}
