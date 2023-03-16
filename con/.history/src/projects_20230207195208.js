
import React, { useState, useEffect } from "react";
import data from './images.json';
import useScript from "./usescripts";

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
  useEffect(() => {
    const axios = require("axios");
const fs = require('fs');

const API_KEY = "AIzaSyDvi_QXXEQzvht-1uJXqFxCxdCOWpfwmH4";
const cx = 'f6af7e183df7e4704';
const word = 'Batman';

axios.get(`https://www.googleapis.com/customsearch/v1`, {
    params: {
        q: word,
    
        imgType: 'photo',
        searchType: 'image',
        key: API_KEY,
        cx: cx
    }
})
.then(response => {
    
    // data.items contains an array of image links
    const imageLinks = response.data.items.map(item => item.link);
    // do something with the image links
    console.log(imageLinks);
    // do something with the members list
    fs.writeFileSync('images.json', JSON.stringify([]), 'utf8')

fs.readFile('images.json', 'utf8', function(err, jsonString) {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    try {
        // parse the JSON string into an object
        var jsonData = JSON.parse(jsonString)
    } catch (e) {
        console.log('Error parsing JSON string:', e)
    }

    // add new data to the object
    jsonData.push(imageLinks);

    // convert the object back to a JSON string
    jsonString = JSON.stringify(jsonData);

    // write the JSON string to the file
    fs.writeFile('images.json', jsonString, 'utf8', function(err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.")
            return console.log(err);
        }
        console.log("JSON file has been updated.");
    });
})
    console.log(imageLinks);
})
.catch(error => {
    console.log(error);
})



    // Your script to run after element has rendered
  }, []);

return (

      <>


      

      
          <header><h1>Projects</h1></header>
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
