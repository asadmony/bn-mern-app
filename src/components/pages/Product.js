import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
    const {product} = props;
    return (
        <div>
           <Link to={`/product/${product.id}`}>
           Product Id : {product.id} <br />
            Product Name: {product.name}
           </Link>
        </div>
    )
}

