import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar"
import BottomNav from './Components/BottomNav/BottomNav';
import CartPage from './Components/CartPage/CartPage';
import EmptyPage from './Components/EmptyPage/EmptyPage';
import Heading from './Components/Heading/Heading';
import LandingPage from './Components/LandingPage/LandingPage';
import LessProductsGrid from './Components/LessProductsGrid/LessProductsGrid';
import ProductCard from './Components/ProductCard/ProductCard';
import Search from './Components/Search/Search';
import WishListPage from './Components/WishlistPage/WishListPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      
      {/* <Search /> */}
      {/* <Heading /> */}
      {/* <CartPage /> */}
      {/* <WishListPage /> */}
      {/* <ProductCard name="rohan" description="A very good prod" price="150 rupeya" inStock={false} isNew={false} img="https://bit.ly/2NY8Tx4" rating="0.5" /> */}

      {/* <EmptyPage img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/23abfd6d1dc3f4df585291366274fc516071ee22/icons/ecomm/emptyCart.svg" pageType="Cart" /> */}
      {/* <EmptyPage img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/551189fca98a388829785311f690d06c18ed8be9/icons/ecomm/empty_wishlist.svg" pageType="Wishlist" /> */}
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
