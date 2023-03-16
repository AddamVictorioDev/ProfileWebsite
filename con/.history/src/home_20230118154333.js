import React, { useState, useEffect } from 'react';
const getComponent = (screenWidth) => {
    if (screenWidth > 768) {
      return <div>
        <p>Desktop</p>
      </div>;
    } else {
      return  <div>
      <p>Mobile</p>
    </div>;
    }
  }
  
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
        {getComponent(screenWidth)}
      </div>
    );
  };