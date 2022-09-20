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
  const { path, className } = props;
  const [isInEditor,setIsInEditor] = useState(false);
  const editorProps = useMemo(() => isInEditor && { 
    'data-cq-path': path,
    'data-cq-label': "Text" 
  }, [isInEditor, path]);

  useEffect(() => {
    getEditorContext({ isInEditor: setIsInEditor });
  }, []);

  const [data,setData] = React.useState({});
  useEffect(() => {
    if(!path) return;
    fetch(path)
      .then((res) => res.json())
      .then((json) => {
        setData(json.paths);
      })
  }, [path]);

  return (
    <div {...editorProps} className={className}>
      {data?.richText ? <div dangerouslySetInnerHTML={{__html: data?.text}}/> : data?.text}
    </div>
  );
};


export default AEMText;