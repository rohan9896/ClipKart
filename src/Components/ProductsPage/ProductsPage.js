import React from 'react'
import "./ProductsPage.css"
import Heading from '../Heading/Heading'
import ProductCard from '../ProductCard/ProductCard'
import {useCartWishlist} from "../../context/cart-wishlist-context"


function ProductsPage() {

    const {state} = useCartWishlist();

    return (
        <>
            <Heading text="ALL PRODUCTS" />
            <div className="ProductsPage__List">
                {
                    state.productsArr.map( product => {
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
