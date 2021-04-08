import React from 'react'

export default function Product(props) {
    const {product} = props;
    return (
        <div>
            Product Id : {product.id} <br />
            Product Name: {product.name}
        </div>
    )
}

