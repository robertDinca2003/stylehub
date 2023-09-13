import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

import  Provider  from 'react';

import ProductPage from './components/ProductPage';
import ShopContextProvider from './contexts/shop-context';
import  CheckOut  from './pages/CheckOut';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
      

      
      <div className="App" >
      

      <Navigation />
      
      <Routes>
          <Route  path = "/" element={<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path='/shop' element = {<Shop/>}/>
          <Route path ='/cart' element = {<Cart/>}/>
          <Route path ='/products/:id' element={<ProductPage/>}/>
          <Route path ='/cart/checkout' element={<CheckOut/>} />
      </Routes>
      
      
      </div>
    
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
