/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import { useEditorContext } from '@aem-sites/universal-editor-cors';
import React, { useEffect } from 'react';

const AEMText = (props) => {
  const { path, className } = props;
  const { isInEditor } = useEditorContext();
  const editorProps = isInEditor && { 
    'data-cq-path': path,
    'data-cq-label': "Text" 
  };

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