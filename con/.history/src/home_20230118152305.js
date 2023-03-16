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
    <MediaQuery query="(min-width: 768px)">
  <p>This content will only be rendered on screens that are at least 768 pixels wide</p>
</MediaQuery>
<MediaQuery default>
  <p>This content will be rendered if none of the above queries match</p>
</MediaQuery>
</div>
   
  );
};

export default HomePage;