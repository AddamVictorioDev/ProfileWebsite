import React, { useState, useEffect } from 'react';
import { MediaQuery } from 'react-responsive';

const HomePage = () => {


  return (
    
    <div>
   <MediaQuery query="(max-width: 767px)">
  <p>This content will only be rendered on screens that are less than 767 pixels wide</p>
</MediaQuery>
    </div>
  );
};

export default HomePage;