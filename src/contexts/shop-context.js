import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    if(window.localStorage.getItem('wakanda') !== null) return JSON.parse(window.localStorage.getItem('wakanda'));
    console.log("working");
    let cart = {};
    for(let i=1; i<21; i++)
    cart[i] = 0 ;

    return cart;

}




const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  useEffect(()=>{const oldData = window.localStorage.getItem('wakanda'); console.log(oldData); if(oldData !== null)setCartItems(JSON.parse(oldData)); },[])
  
  useEffect(()=>{window.localStorage.setItem('wakanda',JSON.stringify(cartItems));},[cartItems])
  const addToCart = (itemId) =>{
    setCartItems((prev) =>({...prev,[itemId]: prev[itemId]+1 }));
    console.log(cartItems);
  }
  const removeFromCart = (itemId) =>{
    setCartItems({...cartItems, [itemId]: cartItems[itemId]-1});
  }

  const saveData = (info) => {setCartItems(info);}

  const contextValue = {cartItems, addToCart, removeFromCart, saveData};

    return (

    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
