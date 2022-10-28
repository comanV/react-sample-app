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
        <h4><AEMText itemID="/path/subtitle"/></h4>
        <h3><AEMText itemID="/path/card-title"/></h3>
        <div class="card-text"><AEMText itemID="urn:aemconnection:/content/wknd/us/en/magazine/western-australia/jcr:content/root/container/container/contentfragment/par0/text" isAEM="true"/></div>
        <Link to={`/articles`}>
          <button itemID="/path/button" itemType="urn:fcs:type/button">Show More</button>
        </Link>
      </div>
    </article>       
  </>
);

export default Card;





