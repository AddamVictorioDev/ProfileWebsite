import React, { useState, useEffect } from 'react';


import "./projects.css";
import { Link } from "react-router-dom";
const photos = [
  {
    src: "https://picsum.photos/200/300",
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
  }
];
const getComponent = (screenWidth) => {
    if (screenWidth > 768) {
      return 
    } else {
      return 
    }
  }
function Projects() {
  return (
    <div className="center">
    <div className="photo-grid">
      {photos.map(photo => (
        <div className="photo-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
    </div>
  );
  function ProjectsPage(){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    return (
      <div>
        {getComponent(screenWidth)}
      </div>
    );
  };
}

export default Projects;
