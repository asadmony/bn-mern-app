import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../../store/actions/productActions';
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'

export default function ProductDetails(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id
    const productDetails = useSelector((state) => state.productDetails)
    const {loading, error, product} = productDetails
    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])
    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>)
            : error ? (<MessageBox variant='danger'></MessageBox>)
            : (
                <div>
                    product: {product.name}
                </div>
            )
        }
        </div>
    )
}
