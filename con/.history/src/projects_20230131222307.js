
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
        {photos.push((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
  }
  
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
for (var i = 0; i< 10; i++){
    photos.push({ src: "https://picsum.photos/200/305",
    alt: "Image 5"})
    
}
fetch("images.json")
        // JSON data
        .then(response => response.json())
  
  .then(data => {
    console.log(data[0][0]);



        // select the element where the data will be appended
  })}
function Projects() {
  return (
      <>
      <div>{Photos}</div>
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
