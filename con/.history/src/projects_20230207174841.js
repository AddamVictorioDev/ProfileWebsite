
import React, { useState, useEffect } from "react";
import data from './images.json';

import "./projects.css";
import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  return (
    <div
        className="character-card"
        style={{
          backgroundImage: `url(${props.photo_icon})`
        }}>
        <div
        className="character-card"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.9) 100%)",
          
        
        }}>
        <div className="character-description">
          <p>{props.first_name}</p>
          
          {props.movies.map((movie) => {
            return (
              <span className="movie">{movie.toLowerCase()}</span>

            )
         
          })}   
             </div>
             </div>
             </div>
  )}
     
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
          <CharacterCard></CharacterCard>
     <div className="photo-grid">
        
              {photos.map(photo => (
                  <div className="photo-item">
            
                      <img src={photo.src} alt={photo.alt}  style={{
        border: "5px solid #000",
        borderRadius: "5px",
        width: "300px",
        height: "300px" }} /> 
                  </div>
              ))}
          </div></>

  );
}

export default Projects;
