import React, { useState, useEffect } from 'react';
import './home.css'
const getComponent = (screenWidth) => {
    if (screenWidth > 768) {
      return <div class="home-page">
      <header>
          <nav>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
          </nav>
      </header>
      <main>
          <section class="hero">
              <h1>Welcome to My App</h1>
              <button>Learn more</button>
          </section>
          <section class="featured-products">
              <h2>Check out our latest products:</h2>
              <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
              </ul>
          </section>
          <section class="about-us">
              <h2>About Us</h2>
              <p>Our company is dedicated to providing high-quality products and services to our customers.</p>
          </section>
      </main>
      <footer>
          <p>Copyright © 2021 My App</p>
      </footer>
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