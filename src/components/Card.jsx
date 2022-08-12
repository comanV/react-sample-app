/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import {Link} from 'react-router-dom';
import image from '../images/wknd-card.jpeg';
import AEMText from './AEMText';

const Card = () => (
  <>
    <article className="card">
      <img src={image} alt="Sample" />
      <div>
        <h4><AEMText path="content/wknd/us/en/jcr:content/root/container/container/title" /></h4>
        <h3><AEMText path="content/wknd/us/en/magazine/western-australia/jcr:content/root/container/container/title"/></h3>
        <p>
          The Australian West coast is a camper’s heaven. 
          Endless miles of desert roads leading to secret beaches, 
          vast canyons and crystal clear rivers, and the very few people you 
          are likely to meet on your journey will be some of the most easy-going 
          characters you will find anywhere in the world.
        </p>
        <Link to={`/articles`}>
          <button>Show More</button>
        </Link>
      </div>
    </article>       
  </>
);

export default Card;





