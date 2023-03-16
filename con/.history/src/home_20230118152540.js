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
    
    <div>
   <MediaQuery query="(max-width: 767px)">
  <p>This content will only be rendered on screens that are less than 767 pixels wide</p>
</MediaQuery>
    </div>
  );
};

export default HomePage;