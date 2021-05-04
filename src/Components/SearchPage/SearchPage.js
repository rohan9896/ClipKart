import React from 'react'
import Search from '../Search/Search'
import "./SearchPage.css"
import {useCartWishlist} from "../../context/cart-wishlist-context"
import NavBar from '../NavBar/NavBar';
import Heading from '../Heading/Heading';
import ProductCard from '../ProductCard/ProductCard';
import BottomNav from '../BottomNav/BottomNav';

function SearchPage() {

    const {state} = useCartWishlist();

    return (
        <>
            <NavBar />
            <Heading text={`RESULTS - ${state.searchedProducts.length}`} />
            <Search />
            <div className="SearchProducts__productsConatiner">
            {
                state.productsArr.map(product => {
                    return <ProductCard key={product.id} {...product} />;
                })
            }
            </div>
            <BottomNav />
        </>
    )
}

export default SearchPage
