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
import Text from './Text';

const Card = () => (
  <>
    <article className="card">
      <img src={image} alt="Sample" />
      <div>
        <h4><Text itemID="local:/path/card" itemProp="subtitle" itemType="text"/></h4>
        <h3><Text itemID="local:/path/card" itemProp="title" itemType="text"/></h3>
        <div className="card-text"><Text itemID="urn:aemconnection:/content/wknd/us/en/magazine/western-australia/jcr:content/root/container/container/contentfragment/par0/text" itemProp="text"/></div>
        <Link to={`/articles`}>
          <button itemID="local:/path/button" itemProp="buttontext" itemType="text">Show More</button>
        </Link>
      </div>
    </article>
  </>
);

export default Card;





