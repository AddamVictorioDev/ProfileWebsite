import { useState } from 'react';
import './form.css'
import React from 'react';
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function SocialBar(){

    return(
        <div className="react-icons">
   
   <Link to="/projects"><AiFillLinkedin href='https://www.linkedin.com/in/addam-victorio/'/></Link>
        <AiFillGithub />

    
        </div>

    );
}
export default SocialBar;