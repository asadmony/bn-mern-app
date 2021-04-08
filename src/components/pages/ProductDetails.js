import React from 'react'

export default function ProductDetails(props) {
    console.log(props);
    const product = props.match.params.id
    return (
        <div>
            product details {product}
        </div>
    )
}
