
import React, { useState, useEffect } from "react";
import data from './images.json';
import useScript from "./usescripts";
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from "react-icons";

import "./projects.css";
import Navigation from "./Navigation";

import { Link } from "react-router-dom";


     
var links = data;
const photos = [

];

for(let i = 0; i<links[0].length;i++){

    console.log("links:" +links[0][i])
    photos.push({src:links[0][i],alt:i})
    
 
   }
   const Card = (props) => {
    return (
     
        
        <div className="photo-item">
          <p className="img-text">{props.description}</p>
          <img src={props.imgSrc} alt={props.imgAlt}  style={{
        border: "5px solid #000",
        borderRadius: "5px",
        width: "300px",
        height: "300px" }}/>

        </div>
      
    );
  };
  const MyComponent = props => {
    useScript('src/images.js');
  
    // rest of your component
  }
  
      // do something with the data}

function Projects() {


return (

      <>


<div className="react-icons">
<AiFillGithub />
</div>
         <Navigation/>
     <div className="photo-grid">
        
              {photos.map(photo => (
                 <Card
                 imgSrc = {photo.src}
                 imgAlt={photo.alt}
                 title="Card Title"
                 description= "Name"
               />
        //           <div className="photo-item">
        //              <p className="img-text">{photo.alt}</p>
        //               <img src={photo.src} alt=  style={{
        // border: "5px solid #000",
        // borderRadius: "5px",
        // width: "300px",
        // height: "300px" }} /> 
        //           </div>
              ))}
          </div></>

  );
}

export default Projects;
