import React from 'react'
import './Heading.css'

function Heading({text}) {
    return (
        <div className="Heading__container">
            <h1>{text}</h1>
        </div>
    )
}

export default Heading
