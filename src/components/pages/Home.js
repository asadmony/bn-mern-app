import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../store/actions/productActions'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'

import Product from './Product'

export default function Home() {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList
    useEffect(() => {
        dispatch(listProducts())
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
