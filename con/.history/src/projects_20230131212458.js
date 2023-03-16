
import React, { useState, useEffect } from "react";

import "./projects.css";
import { Link } from "react-router-dom";

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
function MyComponent() {
    const listItem = document.createElement("li");
    const [data, setData] = useState([]);
  
    useEffect(() => {
        
      fetch("./images.json")
      
        .then(response => response.json())
        
        .then(json => setData(json))
        .catch(error => console.error(error))
        .then(response =>  {
            const imageLinks = response.data.items.map(item => item.link);
            photos.push(  {
                src: imageLinks,
                alt: "Image i"}
              );});
    }, []);

  }
  
function Photos(){ 
    MyComponent();
for (var i = 0; i< 10; i++){
    photos.push(  {
        src: "https://picsum.photos/200/305",
        alt: "Image i"}
      );
}}

function Projects() {
    MyComponent()
  return (
      <>
      <div>{MyComponent()}</div>
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
