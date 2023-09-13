import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/Slider.css';
import { Link } from 'react-router-dom';

export const  Sidebar =()=> {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/shop">
        Shop
      </Link>
      
      <Link className="menu-item" to="/about">
        About
      </Link>
      <Link className="menu-item" to="/cart">
        Your cart
      </Link>
    </Menu>
  );
};

export default Sidebar;