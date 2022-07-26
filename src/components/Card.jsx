/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import image from '../images/wknd-card.jpeg';

const Card = () => (
    <article className="card">
        <img src={image} alt="Sample" />
        <div>
          <h4>Featured Article</h4>
          <h3>Camping in Western Australia</h3>
          <p>
            The Australian West coast is a camper’s heaven. 
            Endless miles of desert roads leading to secret beaches, 
            vast canyons and crystal clear rivers, and the very few people you 
            are likely to meet on your journey will be some of the most easy-going 
            characters you will find anywhere in the world.
          </p>
        </div>
    </article>
);

export default Card;





