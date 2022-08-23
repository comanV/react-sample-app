/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import { useEffect } from 'react';
import { EditorContext } from '../App';
import AEMText from './AEMText';

const AEMContainer = ({ path }) => {
  const isInEditor = React.useContext(EditorContext);
  const editorProps = isInEditor && { 
    'data-cq-path': path,
    'data-cq-label': "Container"
  };

  const [data,setData] = React.useState({});
  useEffect(() => {
    if(!path) return;
    fetch(path)
      .then((res) => res.json())
      .then((json) => {
        const response = json.paths;
        setData(response);
      })
  }, [path]);
  const items = data && data.items ? data.items.map(item => <AEMText key={item?.path} {...item} />) : <></>;

  return (
    <div {...editorProps} className="container">
      {items}
    </div>
  );
};


export default AEMContainer;