import { useState } from 'react';
import './SocialBar.css'
import React from 'react';
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function SocialBar(){

    return(
        <div className="react-icons">
   
   <Link to="www.linkedin.com/in/addam-victorio"><AiFillLinkedin/></Link>
       <Link to="www.linkedin.com/in/addam-victorio"><AiFillGithub /></Link> 

    
        </div>

    );
}
export default SocialBar;