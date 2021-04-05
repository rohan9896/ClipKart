import './App.css';
import Banner from './Components/Banner/Banner';
import BottomNav from './Components/BottomNav/BottomNav';
import EmptyCartPage from './Components/EmptyCartPage/EmptyCartPage';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Search />
      <Banner />

      <EmptyCartPage />
      <Footer />
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
