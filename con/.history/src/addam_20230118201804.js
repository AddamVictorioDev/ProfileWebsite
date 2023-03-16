import React, { useState, useEffect } from 'react';
import './addam.css'
const getComponent = (screenWidth) => {
    if (screenWidth > 768) {
      return <div class="home-page">
    <div class="container"></div>
     <div class="main"> 
     <h1>Addam </h1>
       <h1> Victorio.</h1>
     <hr></hr>
     <nav>
     
     <a href="#services">Projects</a>
     <a href="#contact">Contact</a>
 </nav></div>
    
      
      <hr></hr>
    
    
     
      <footer>
          <p>Copyright © 2021 My App</p>
      </footer>
  </div>
  
    } else {
      return <div class="home-page">
      <div class="container"></div>
       <div class="main"> 
       <h1>Addam </h1>
       <h1> Victorio.</h1>

       <hr></hr>
       <nav>
       
       <a href="#services">Projects</a>
       <a href="#contact">Contact</a>
   </nav></div>
      
        
        <hr></hr>
      
      
       
        <footer>
            <p>Copyright © 2021 My App</p>
        </footer>
    </div>
    
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