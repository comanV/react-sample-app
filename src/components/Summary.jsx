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
      <p><i><AEMText itemID="/content/wknd/us/en/about-us/jcr:content/root/container/text_359993709" isAEM="true"/></i></p>
      <AEMText itemID="/content/wknd/us/en/faqs/jcr:content/root/container/container/text" isAEM="true" />
      </div>
      <img src={image} alt="footer" />        
    </div>
);

export default Summary;
