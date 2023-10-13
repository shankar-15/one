// Header.js
import React from 'react';

function Header() {
  return (
    <header className="navbar">
      <div>
        <a href="/">Home</a>
        <a href="/Services">Services</a>
        <a href="/Products">Products</a>
        <a href="/AboutUs">About Us</a>
        <a href="/ContactUs">Contact Us</a>
      </div>
      <div className="navbar-right">
        <img src="/public/robot.jpg" alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
