/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import image from '../images/footer.jpeg';
import AEMText from './AEMText';

const Summary = () => (
    <div className="card">
      <div>
      <h3>About US</h3>
      <p><i><AEMText itemID="/path/summary-intro"/></i></p>
      <AEMText itemID="/path/summary-content" />
      </div>
      <img src={image} alt="footer" />        
    </div>
);

export default Summary;
