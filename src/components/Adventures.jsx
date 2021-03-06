/*
Copyright 2020 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import useGraphQL from '../api/useGraphQL';
import Error from './Error';
import Loading from './Loading';
import "./Adventures.scss";

import { EditorContext } from "../App";

function AdventureItem(props) {
  const isInEditor = useContext(EditorContext);

  //Must have title, path, and image
  if(!props || !props._path || !props.title || !props.primaryImage ) {
    return null;
  }
  const editorProps = isInEditor && { 'data-cq-ref': props._path };
  return (
         <li className="adventure-item" {...editorProps}>
          <Link to={`/adventure:${props.slug}`}>
            <img className="adventure-item-image" src={props.primaryImage._path} 
                alt={props.title} data-id="primaryImage"/>
          </Link>
          <div className="adventure-item-length-price">
            <div className="adventure-item-length" data-id="tripLength">{props.tripLength}</div>
            <div className="adventure-item-price" data-id="price">${props.price}</div>
          </div>
          <div className="adventure-item-title" data-id="title">{props.title}</div>
      </li>
  );
}

// import { EditableCF } from '@aem-sites/universal-editor-react';

// const Image = ({ _path, title }) => ( 
//   <img className="adventure-item-image" src={_path} alt={title} />
// );

// function AdventureItem({ _path, slug, ...props}) {
//   if(!props || !_path || !props.title || !props.primaryImage ) {
//     return null;
//   }
//   return (
//     <li className="adventure-item">
//       <EditableCF data={props} path={_path} components={{
//         primaryImage: <Image />
//       }}/>
//     </li>
//   );
// }

function Adventures() {
  const persistentQuery = 'wknd-shared/adventures-all';
  //Use a custom React Hook to execute the GraphQL query
  const { data, errorMessage } = useGraphQL('', persistentQuery);

  //If there is an error with the GraphQL query
  if(errorMessage) return <Error errorMessage={errorMessage} />;

  //If data is null then return a loading state...
  if(!data) return <Loading />;
  
  return (
      <div className="adventures">
        <ul className="adventure-items">
          {
              //Iterate over the returned data items from the query
              data.adventureList.items.map((adventure, index) => {
                return (
                  <AdventureItem key={index} {...adventure} />
                );
              })
          }
          </ul>
      </div>
  );
}

export default Adventures;