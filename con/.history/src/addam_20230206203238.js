import React, { useState, useEffect } from 'react';
import './addam.css'
import { Link } from "react-router-dom";

function ClickableText() {
  
  const handleClick = () => {
    console.log("Text was clicked!");
  };

  return (
    <button onClick={handleClick}>

    </button>
  );
}
const getComponent = (screenWidth) => {
    
    if (screenWidth > 767) {
        
      return <div class="home-page">
        
            <div className="container">
            
            </div>
            <div class="desktop"> 
                <h1 id='text'>Addam  Victorio.</h1>
           <ClickableText><h1>c</h1></ClickableText>

                <hr></hr>
                <nav>
                
                  <Link to="/projects">Projects</Link>
                    
                    <a href="#contact">Contact</a>
                </nav>
            </div>
            
            
            <hr></hr>
            
            
            
            <footer>
                <p>Copyright © 2021 My App</p>
            </footer>
  </div>
  
    } else {
      return <div class="home-page">
      <div class="container"></div>
       <div class="mobile"> 
       <h1>Addam</h1>
       <h1>Victorio.</h1>
       <ClickableText/>

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

  function Addam() {
    const myHeading = document.querySelector("text");

// Set the font after 5 seconds
setInterval(() => {
    myHeading.style.fontFamily = "Arial, sans-serif";
    myHeading.style.color = "red";
    myHeading.style.fontSize = "32px";
}, 5000);
    
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