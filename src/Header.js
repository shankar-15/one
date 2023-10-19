// Header.js
import React from 'react';

function Header() {
  return (
    <header className="navbar">
      <div>
        <a href="/">Home</a> 
        <a href="/Services" target='_blank'>Services</a>
        <a href="/Products" target='_blank'>Products</a>
        <a href="/AboutUs" target='_blank'>About Us</a>
        <a href="/ContactUs">Contact Us</a>
      </div>
    </header>
  );
}

export default Header;
