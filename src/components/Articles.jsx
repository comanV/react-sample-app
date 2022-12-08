/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React, { useEffect, useState, useMemo } from 'react';
import useGraphQL from '../api/useGraphQL';
import {Link} from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import "./Articles.scss";
import { getEditorContext } from '@aem-sites/universal-editor-cors';
const { REACT_APP_PUBLISH_URI } = process.env;

const Article = ({ _path, title, authorFragment, slug, featuredImage }) => {
  const [isInEditor,setIsInEditor] = useState(false);
  const editorProps = useMemo(() => isInEditor && { itemID: "urn:aemconnection:" + _path, itemType: "reference"}, [isInEditor, _path]);

  useEffect(() => {
    getEditorContext({ isInEditor: setIsInEditor });
  }, []);

  //Must have title, path, and image
  if(!_path || !title || !featuredImage ) {
    return null;
  }
  return (
    <li className="adventure-item" itemScope {...editorProps}>
        <Link to={`/articles/article:${slug}`}>
          <img className="adventure-item-image" src={`${REACT_APP_PUBLISH_URI}${featuredImage?._path}`}
                alt={title} itemProp="primaryImage" itemType="image" />
        </Link>               
        <div className="adventure-item-title" itemProp="title" itemType="text">{title}</div>
        <p>{`${authorFragment.firstName} ${authorFragment.lastName}`}</p>
    </li>
  );
};

const Articles = () => {
  const persistentQuery = 'wknd-shared/articles-all';

  //Use a custom React Hook to execute the GraphQL query
  const { data, errorMessage } = useGraphQL('', persistentQuery);

  //If there is an error with the GraphQL query
  if(errorMessage) return <Error errorMessage={errorMessage} />;

  //If data is null then return a loading state...
  if(!data) return <Loading />;

  return (
    <>
      <h2>Articles</h2>
      <ul className="adventure-items">
        {
            data.articleList.items.map((article, index) => {
              return (
                <Article key={index} {...article} />
              );
            })
        }
        </ul>
    </>
);
  
};

export default Articles;





