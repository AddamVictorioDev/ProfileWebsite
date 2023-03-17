import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './form.css'
import React, { Component } from 'react';
import Icon1 from './aUnknown.png';
import { Link } from "react-router-dom";
import ReusableButton from './ReuseableButton';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
function SocialBar(){

    return(
        <div className="react-icons">
        <AiFillGithub />
        <AiFillLinkedin/>
        </div>

    );
}
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
        <header> <Link to="/">Addam.</Link></header>

        <div className='bar'>

           <nav>
            
        
                        <Link to="/projects">Projects</Link>
                          
                          <a href="/form">Contact</a>
                      </nav>
                      <SocialBar/>
               
                      </div>
                      </>);
  }
  export default Navagation;
