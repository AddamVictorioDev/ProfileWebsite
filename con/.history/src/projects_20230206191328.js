
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
      backgroundImage: URL(`https://static01.nyt.com/images/2023/01/05/fashion/03FETTERMAN-SUIT-1-535e/03FETTERMAN-SUIT-1-535e-videoSixteenByNine3000.jpg","https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-10/221026-john-fetterman-se-555p-c0ccb9.jpg","https://www.inquirer.com/resizer/M3ClG7Nyw6T4ACQoBdCl6IvqF9k=/1x0:1200x800/760x507/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/RAJNTZALRVFKZAV7GA5X4KYMWU.jpg","https://johnfetterman.com/wp-content/uploads/2021/01/hero-img.png","https://assets.vogue.com/photos/63755eec70261204bfb8ab31/master/pass/315434357_1165058284092094_7895100412465346393_n.jpg","https://media.cnn.com/api/v1/images/stellar/prod/220911194042-john-fetterman-mehmet-oz-campaign-rally.jpg?c=original","https://static01.nyt.com/images/2022/10/14/opinion/13berry-image/13berry-image-superJumbo.jpg","https://www.aphasia.com/wp-content/uploads/2022/11/Fetterman.jpeg","https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/11/1200/675/Barack-Obama-John-Fetterman-Pennsylvania-Senate-Race.jpg?ve=1&tl=1`),
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
