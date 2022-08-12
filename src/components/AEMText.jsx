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
const { REACT_APP_HOST_URI } =  process.env;

const AEMText = ({ path }) => {
  const isInEditor = React.useContext(EditorContext);
  const editorProps = isInEditor && { 
    'data-cq-path': path,
    'data-cq-label': "Text" 
  };

  const [data,setData] = React.useState({});
  useEffect(() => {
    async function fetchData(path) {
      const hostURL = `${REACT_APP_HOST_URI}${path}`.replace(/\/+/g, '/');
      const response = await fetch(`${hostURL}.model.json`, {
        headers: {
          Authorization: 'Basic YWRtaW46YWRtaW4='
        }
      });
      if (response.ok) setData(await response.json());
    }
    fetchData(path);
  },[path]);

  return (
    <div {...editorProps}>
      {data?.text}
    </div>
  );
};


export default AEMText;