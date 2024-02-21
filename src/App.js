import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/Search/Search';
import Restaurant from './components/restaurants/Restaurant';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/menu/:restaurantId" element={<Restaurant/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
