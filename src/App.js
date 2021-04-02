import './App.css';
import BottomNav from './Components/BottomNav/BottomNav';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BottomNav />
      <Search />
    </div>
  );
}

export default App;
