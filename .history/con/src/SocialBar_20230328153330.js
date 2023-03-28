import { useState } from 'react';
import './form.css'
import React from 'react';
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function SocialBar(){

    return(
        <div className="react-icons">
            <style>
@import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');
</style>
                    <AiFillLinkedin/>
        <AiFillGithub />

    
        </div>

    );
}
export default SocialBar;