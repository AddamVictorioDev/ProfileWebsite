
import React, { useState, useEffect } from "react";
import data from './images.json';

import "./projects.css";
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
      <div style={{ width: '18rem' }}>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <div>
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    );
  };
  
      // do something with the data}

function Projects() {
  
  return (

      <>
    

      
          <header><h1>Projects</h1></header>
     <div className="photo-grid">
        
              {photos.map(photo => (
                  <div className="photo-item">
                     <p className="img-text">{photo.alt}</p>
                      <img src={photo.src} alt={photo.alt}  style={{
        border: "5px solid #000",
        borderRadius: "5px",

        height: "300px" }} /> 
                  </div>
              ))}
          </div></>

  );
}

export default Projects;
