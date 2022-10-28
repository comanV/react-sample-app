/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React, { useEffect, useState, useMemo } from 'react';
import { getEditorContext } from '@aem-sites/universal-editor-cors';
const { REACT_APP_IO_URL } =process.env;

const fetchFromAEM = async (path) => {
  const url = `${REACT_APP_IO_URL}content?path=/${path.split(":/")[1]}`;
  const data = await fetch(url);
  return data.json();
};

const AEMText = (props) => {
  const { itemID, className, isAEM } = props;
  const [isInEditor,setIsInEditor] = useState(false);
  const editorProps = useMemo(() => isInEditor && { 
    itemID,
    itemType: "type/text" 
  }, [isInEditor, itemID]);

  useEffect(() => {
    getEditorContext({ isInEditor: setIsInEditor });
  }, []);

  const [data,setData] = React.useState({});
  useEffect(() => {
    if(!itemID) return;
    if(isAEM) {
      fetchFromAEM(itemID).then(({ data }) => setData(data));
    } else {
      fetch(itemID)
      .then((res) => res.json())
      .then((json) => {
        setData(json.paths);
      })
    }  
  }, [itemID, isAEM]);

  return (
    <div {...editorProps} className={className}>
      {data?.text}
    </div>
  );
};


export default AEMText;