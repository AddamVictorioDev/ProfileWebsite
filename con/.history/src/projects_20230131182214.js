import React from "react";
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

function Projects() {
  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <div className="photo-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
