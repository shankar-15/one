// App.js
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import './App.css'; // Import the CSS Module
import AboutUs from './AboutUs';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route path='Home' element={<Home/>}></Route>
      <Route path='Services' element={<Services/>}></Route>
      <Route path='AboutUs'element={<AboutUs/>}></Route>
      {/* <Route path='Contactus' element={</>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
