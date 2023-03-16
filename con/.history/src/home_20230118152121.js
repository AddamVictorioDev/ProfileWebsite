import React, { useState, useEffect } from 'react';
import { MediaQuery } from 'react-responsive';

const HomePage = () => {
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
    <MediaQuery query="(min-width: 768px)">
  <p>This content will only be rendered on screens that are at least 768 pixels wide</p>
</MediaQuery>
   
  );
};

export default HomePage;