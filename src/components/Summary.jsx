/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import image from '../images/footer.jpeg';
import AEMContainer from './AEMContainer';

const Summary = () => (
    <div className="card">
      <div>
      <h3>About US</h3>
      <AEMContainer path="/path/summary" />
      </div>
      <img src={image} alt="footer" />        
    </div>
);

export default Summary;
