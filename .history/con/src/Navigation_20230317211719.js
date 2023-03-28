import { useState } from 'react';
import './form.css'
import React from 'react';
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import SocialBar from './SocialBar';

function Navagation() {
  
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
        <>
        <header> <Link to="/">AV.</Link><SocialBar/>
</header>

        <div className='bar'>

           <nav>
            
        
                        <Link to="/projects">Projects</Link>
                          
                          <a href="/form">Contact</a>
                      </nav>
                    
               
                      </div>
                  
                      </>);
  }
  export default Navagation;
