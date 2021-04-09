import React from 'react'

export default function MessageBox(props) {

    return (
        <div>
            {props.variant} - {props.children}        
        </div>
    )
}
