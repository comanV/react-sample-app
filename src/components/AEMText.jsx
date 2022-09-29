/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React, { useEffect, useState, useMemo } from 'react';
import { getEditorContext } from '@aem-sites/universal-editor-cors';

const AEMText = (props) => {
  const { itemID, className } = props;
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
    fetch(itemID)
      .then((res) => res.json())
      .then((json) => {
        setData(json.paths);
      })
  }, [itemID]);

  return (
    <div {...editorProps} className={className}>
      {data?.richText ? <div dangerouslySetInnerHTML={{__html: data?.text}}/> : data?.text}
    </div>
  );
};


export default AEMText;