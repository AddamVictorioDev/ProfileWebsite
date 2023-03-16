
import React, { useState, useEffect } from "react";
import data from './images.json';

import "./projects.css";
import { Link } from "react-router-dom";
var links = data;
const photos = [

];

for(let i = 0; i<links[0].length;i++){

    console.log("links:" +links[0][i])
    photos.push({src:links[0][i],alt:"image"})
    
 
   }
 
      // do something with the data}

function Projects() {
  
  return (

      <>
      
      
      
          <header><h1>Projects</h1></header>
          <div style={{
      backgroundImage: `url(path/to/your/image.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100vh',
      width: '100%'
    }} />
     <div className="photo-grid">
        
              {photos.map(photo => (
                  <div className="photo-item">
                    <p>{photo.src}</p>
                      <img src={photo.src} alt={photo.alt} />
                  </div>
              ))}
          </div></>

  );
}

export default Projects;
