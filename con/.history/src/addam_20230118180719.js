import React, { useState, useEffect } from 'react';
import './addam.css'
const getComponent = (screenWidth) => {
    if (screenWidth > 768) {
      return <div class="home-page">
    <div class="container"></div>
     
      <h1>Addam.</h1>
      <hr></hr>
    
    
      <nav>
     
              <a href="#services">Projects</a>
              <a href="#contact">Contact</a>
          </nav>
      <footer>
          <p>Copyright © 2021 My App</p>
      </footer>
  </div>
  
    } else {
      return <div class="home-page">
      <header>
      <h1>Welcome to My App</h1>
      <hr></hr>
      </header>
    
      <nav>
              <a href="#about">Senators</a>
              <a href="#services">Representatives</a>
              <a href="#contact">Presidents/Vice Presidents</a>
          </nav>
      <div className='maincontent'>
          <section class="hero">
           
           
          </section>
          <section class="featured-products">
              <h2>Check out our latest products:</h2>
              <ul>
                  <li>Product 1</li>
                  <button>Learn more</button>
                  <li>Product 2</li>
                  <li>Product 3</li>
              </ul>
          </section>
          <section class="about-us">
              <h2>About Us</h2>
              <p>Our company is dedicated to providing high-quality products and services to our customers.</p>
          </section>
      </div>
      <footer>
          <p>Copyright © 2021 My App</p>
      </footer>
  </div>;
    }
  }
  
  const Addam = () => {
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
  export default Addam;