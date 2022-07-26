/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
const { createProxyMiddleware } = require('http-proxy-middleware');
const {REACT_APP_HOST_URI } = process.env;

/*
    Set up a proxy with AEM for local development
    In a production enviroment this proxy should be set up at the webserver level or absolute URLs should be used.
*/

module.exports = function(app) {
  app.use(
    ['/content', '/graphql'],
    createProxyMiddleware({
      target: REACT_APP_HOST_URI,
      changeOrigin: true
    })
  );

  /**
    * Enable CORS on requests from the SPA to AEM
    * 
    * If this rule is not in place, CORS errors will occur when running the SPA on http://localhost:3000
    */
   app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", REACT_APP_HOST_URI);
    next();
});
};

