import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/Search/Search';
import Restaurant from './components/restaurants/Restaurant';
import Cart from './components/cart/Cart';
import AddRestaurant from './components/SuperAdmin/AddRestaurant';
import AddMenuItem from './components/hotelOwner/AddMenuItem';
import Orders from './components/user/Orders';
import MyOrders from './components/hotelOwner/MyOrders';
import OrderDelivery from './components/deliveryPerson/OrderDelivery';
import PickedOrders from './components/deliveryPerson/PickedOrders';
import DisplayMenu from './components/hotelOwner/DisplayMenu';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/menu/:restaurantId" element={<Restaurant/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/addRestaurant" element={<AddRestaurant/>}/>
      <Route exact path="/addMenuItem" element={<AddMenuItem/>}/>
      <Route exact path='/orders' element={<Orders/>}/>
      <Route exact path='/restaurantOrders' element={<MyOrders/>}/>
      <Route exact path='/deliveryOrders/:area' element={<OrderDelivery/>}/>
      <Route exact path='/pickedOrders' element={<PickedOrders/>}/>
      <Route exact path='/myMenu' element={<DisplayMenu/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
