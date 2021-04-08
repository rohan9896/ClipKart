import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;


      // {/* <Search /> */}
      // {/* <Heading /> */}
      // {/* <CartPage /> */}
      // {/* <WishListPage /> */}
      // {/* <ProductCard name="rohan" description="A very good prod" price="150 rupeya" inStock={false} isNew={false} img="https://bit.ly/2NY8Tx4" rating="0.5" /> */}

      // {/* <EmptyPage img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/23abfd6d1dc3f4df585291366274fc516071ee22/icons/ecomm/emptyCart.svg" pageType="Cart" /> */}
      // {/* <EmptyPage img="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/551189fca98a388829785311f690d06c18ed8be9/icons/ecomm/empty_wishlist.svg" pageType="Wishlist" /> */}
      // {/* <BottomNav /> */}