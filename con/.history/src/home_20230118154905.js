import React, { useState, useEffect } from 'react';
import './home.css'
const getComponent = (screenWidth) => {
    if (screenWidth > 768) {
      return  <div className="home-page">
      <h1>Welcome to My App</h1>
      <nav>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
      <p>Check out our latest products:</p>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
    } else {
      return  <div>
      <p>Mobile</p>
    </div>;
    }
  }
  
  const HomePage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    return (
      <div>
        {getComponent(screenWidth)}
      </div>
    );
  };
  export default HomePage;