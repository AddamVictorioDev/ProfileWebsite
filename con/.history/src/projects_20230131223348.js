
import React, { useState, useEffect } from "react";

import "./projects.css";
import { Link } from "react-router-dom";
const fs = require('fs');

  
var photos = [

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lt._Gov._John_Fetterman_Portrait_%2846874790005%29.jpg/1200px-Lt._Gov._John_Fetterman_Portrait_%2846874790005%29.jpg",
    alt: "Image 1"
  },
  {
    src: "https://picsum.photos/200/301",
    alt: "Image 2"
  },
  {
    src: "https://picsum.photos/200/302",
    alt: "Image 3"
  },
  {
    src: "https://picsum.photos/200/303",
    alt: "Image 4"
  },
  {
    src: "https://picsum.photos/200/304",
    alt: "Image 5"
  },
  {
    src: "https://picsum.photos/200/305",
    alt: "Image 5"
  }
];
function Photos(){
    fetch("images.json")
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

    })
        console.log(imageLinks);
    })
for (var i = 0; i< 10; i++){
    photos.push({src:"",alt:""})
}}
function Projects() {
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
