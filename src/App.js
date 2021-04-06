import './App.css';
import Banner from './Components/Banner/Banner';
import BottomNav from './Components/BottomNav/BottomNav';
import CartPage from './Components/CartPage/CartPage';
import EmptyPage from './Components/EmptyPage/EmptyPage';
import Footer from './Components/Footer/Footer';
import Heading from './Components/Heading/Heading';
import LessProductsGrid from './Components/LessProductsGrid/LessProductsGrid';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
import WishListPage from './Components/WishlistPage/WishListPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      {/* <Search /> */}
      <Banner />
      {/* <Heading /> */}
      {/* <CartPage /> */}
      <LessProductsGrid />
      {/* <WishListPage /> */}

      {/* <EmptyPage img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/23abfd6d1dc3f4df585291366274fc516071ee22/icons/ecomm/emptyCart.svg" pageType="Cart" /> */}
      {/* <EmptyPage img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/551189fca98a388829785311f690d06c18ed8be9/icons/ecomm/empty_wishlist.svg" pageType="Wishlist" /> */}

      <Footer />
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
