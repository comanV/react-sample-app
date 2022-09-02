# Local development

- The app it's getting data from an AEMCS instance (https://author-p48068-e243163.adobeaemcloud.com);
- WKND project is installed the instance;

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [https://localhost:3000](https://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
Utilize a gulp task to bundle all the JS and CSS files in the static build folder into the single main `index.html` file.
This is useful for having the `index.html` bundle file automatically deployed on `https://ue-remote-app.adobe.net` when pushing new changes on the `main` branch.

This command is executed automatically before each commit by the `pre-commit` script.

## Authentication

In order to be able to access the data from the above-mentioned AEMCS instance, you need to provide the service credentials config on `src/auth/serviceCredentialsConfig.js` like this:

`const serviceCredentials = {`

  `ok: true,`

   `integration: {`

   `},`

  `statusCode: 200`

`};`

`export default serviceCredentials;`

## Automatic deployment flow

The application uses the husky package (https://www.npmjs.com/package/husky), for adding a pre-commit script, located in the  `.husky` folder.
The `pre-commit` script will be run before each commit. It will build the project and will add the build bundle from `build/index.html` to the commit.
We expose this bundle to GitHub. This is happening due to the usage of internal artifactory packages (we cannot build the project on a deployment environment).

The flow is that we build the application locally and deploy the bundle through GitHub workflow to https://ue-remote-app.adobe.net, on each PR merged to the `main` branch.

## Manual deployments

### Prerequisites
Install Netlify CLI

`npm install netlify-cli -g`

Set the following environment variables in your terminal settings (for https://ue-remote-app.adobe.net):

`NETLIFY_AUTH_TOKEN = <authentication token>`

`NETLIFY_SITE_ID = <site id where to deploy>`

 ### Deploy commands
Run in project root:

`npm run deploy` - deploy the app at any point to a non-production link, e.g https://62ff59a019923a6f7aec439d--prismatic-panda-c194c0.netlify.app/.

`npm run deploy prod` - deploy the app to the production link https://ue-remote-app.adobe.net (this is usually not needed, the application is automatically deployed on every PR merged to the `main` branch).
 
If case of permission issues, run `chmod +x deploy/script.sh` at the root of the project.

