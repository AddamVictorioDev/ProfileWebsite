
import React, { useState, useEffect } from "react";
import data from './images.json';

import "./projects.css";
import { Link } from "react-router-dom";
var links = data;
const photos = [

];


      // do something with the data}

function Projects() {
    for(let i = 0; i<links.length;i++){
        console.log("links:" +links[0][i])
        photos.push({src:links[0][i],alt:"image"})
       }
   
  

  
  return (

      <>
      
      
      
          <header><h1>Projects</h1></header>
     <div className="photo-grid">
        
              {photos.map(photo => (
                  <div className="photo-item">
                      <img src={photo.src} alt={photo.alt} />
                  </div>
              ))}
          </div></>

  );
}

export default Projects;
