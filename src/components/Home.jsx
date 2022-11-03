/*
Copyright 2022 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import Adventures from './Adventures';
import Text from './Text';
import Card from './Card';
import Summary from './Summary';
import {Link} from 'react-router-dom';
/***
 * Displays a grid of current adventures
 */
 function Home() {
    return (
      <div className="Home">
        <Link to={`/article`}>
          <p>Go to Content Services Sample</p>
        </Link>
        <Card/>
        <hr/>
        <h2>
          <Text className="customfont" itemID="local:/path/home" itemProp="jcr:title"/>
        </h2>
        <Adventures />
        <hr/>
        <Summary />
    </div>
    );
}

export default Home;
