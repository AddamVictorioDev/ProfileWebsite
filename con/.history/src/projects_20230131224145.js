
import React, { useState, useEffect } from "react";

import "./projects.css";
import { Link } from "react-router-dom";
function MyComponent() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("./images.json")
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <ul>
        {photos.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
  }
  
const photos = [

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
    .then(response => response.json())
    
    .then(data => {
      console.log(data[0]);
  
     
  
  // iterate through the data and create a list item for each object
  
  for (const item of data) {
      for(i in item){
       
      console.log(data);
      console.log("item:"+data[0][0]);
   

  
      // do something with the data
    }}});
for (var i = 0; i< 10; i++){
    photos.push()
}}
function Projects() {
    Photos();
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
