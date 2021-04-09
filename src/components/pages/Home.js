import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'

import Product from './Product'

export default function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/data/all');
                setLoading(false)
                setProducts(data)
            } catch (error) {
                setError(error.message);
                setLoading(false)
            }
        };
        fetchData();
    }, [])
    return (
        <div>
            <div>
                Product List
            </div>
            <div>
                {loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox variant='danger'>{error}</MessageBox>
                :
                <div>
                    {products.map((product)=>(
                        <Product key={product.id} product={product}></Product>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}
