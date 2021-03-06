/*
Copyright 2022 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import Adventures from './Adventures';
import Card from './Card';
import Summary from './Summary';

/***
 * Displays a grid of current adventures
 */
 function Home() {
    return (
      <div className="Home">
        <Card/>
        <hr/>
        <h2>Current Adventures</h2>
        <Adventures />
        <hr/>
        <Summary />
    </div>
    );
}

export default Home;