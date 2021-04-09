import React from 'react'
import "./ProductsPage.css"
import {productsData} from "../../data/faker-productsData"
import Heading from '../Heading/Heading'
import ProductCard from '../ProductCard/ProductCard'

function ProductsPage() {
    return (
        <>
            <Heading text="ALL PRODUCTS" />
            <div className="ProductsPage__List">
                {
                    productsData.map( product => {
                        return (
                            <ProductCard {...product} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductsPage
