import React, { useState, useEffect } from 'react';
import './addam.css'
import { Link } from "react-router-dom";

function ClickableText() {
  
  const [style,setStyle] = useState("cont")
  var text = "."
  const handleClick = () => {
    if(style === "cont"){
    setStyle("cont2")
    }
    else if (style==="cont2"){
      setStyle("cont")

    }
    console.log("Text was clicked!");
    

    

  };

  return (
    <button onClick={handleClick}>
<h2 className={style}>{text}</h2>
    </button>
  );
}
const getComponent = (screenWidth) => {
    
    if (screenWidth > 767) {
        
      return <div class="home-page">
       
            <div className="container">
            
            </div>
            <div class="desktop"> 
                <h1 id='text'>Addam Victorio<ClickableText> </ClickableText></h1>
                <hr></hr>
       

              
                <nav>
                
                  <Link to="/projects">Projects</Link>
                    
                    <a href="/form">Contact</a>
                </nav>
            </div>
            
            
       
            
            
            
            <footer>
                <p>Copyright © 2021 My App</p>
            </footer>
  </div>
  
    } else {
      return <div class="home-page">
      <div class="container"></div>
       <div class="mobile"> 
       <h1 >Addam Victorio<ClickableText/></h1>
     

       <hr></hr>
       <nav>
       
       <Link to="/projects">Projects</Link>
                    
                    <a href="/form">Contact</a>
   </nav></div>
      
   
      
      
       
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