/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import image from '../images/footer.jpeg';

const Summary = () => (
    <div className="card">
      <div>
      <h3>About US</h3>
      <p>
        WKND is a collective of outdoors, music, crafts, adventure sports, and travel enthusiasts that want to share our experiences, connections, and expertise with the world. Our objective is create a community to help like-minded adventure seekers find fun, engaging, and responsible ways to to enjoy life and create lasting memories.
      </p>
      </div>
      <img src={image} alt="footer" />        
    </div>
);

export default Summary;
