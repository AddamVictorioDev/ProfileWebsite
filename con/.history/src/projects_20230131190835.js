
import React, { useState, useEffect } from 'react';

import "./projects.css";
import { Link } from "react-router-dom";
const photos = [
  {
    src: "https://picsum.photos/200/300",
    alt: "Image 1"
  },
  {
    src: "https://picsum.photos/200/301",
    alt: "Image 2"
  },
  {
    src: "https://picsum.photos/200/302",
    alt: "Image 3"
  },
  {
    src: "https://picsum.photos/200/303",
    alt: "Image 4"
  },
  {
    src: "https://picsum.photos/200/304",
    alt: "Image 5"
  }
];
const getComponent = (screenWidth) => {
    if (screenWidth > 768) {
      return
      <Projects/>
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
function Projects() {

  
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

export default Projects;
