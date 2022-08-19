import { createServer } from "miragejs"
const { REACT_APP_HOST_URI } = process.env;
let server = createServer()
server.get("/card/subtitle", {
  id: "title-c2d2b28d00",
  linkDisabled: false,
  type: "h2",
  text: "Recent Articles",
  ":type": "wknd/components/title",
  appliedCssClassNames: "cmp-title--underline"
});

server.get("/card/title", {
  "id": "title-6782e190a5",
  "linkDisabled": false,
  "type": "h1",
  "text": "Western Australia by Camper Van",
  ":type": "wknd/components/title"
});

server.get("/main/title", {
  "id": "title-439468b079",
  "linkDisabled": false,
  "type": "h2",
  "text": "WKND Guides",
  ":type": "wknd/components/title",
  "appliedCssClassNames": "cmp-title--underline"
});

server.get("/summary/intro", {
  "id": "text-7e8f28d193",
  "text": "Meet our extraordinary travel guides. When you travel with a certified WKND guide you gain access to attractions and perspectives not found on the pages of a guide book.",
  ":type": "wknd/components/text",
  "appliedCssClassNames": "cmp-text--font-small"
});

server.get("/summary/content", {
  "id": "text-a8814241aa",
  "text": "WKND is a collective of outdoors, music, crafts, adventure sports, and travel enthusiasts that want to share our experiences, connections, and expertise with the world. Our objective is create a community to help like-minded adventure seekers find fun, engaging, and responsible ways to to enjoy life and create lasting memories.",
  ":type": "wknd/components/text"
});

server.passthrough(`${REACT_APP_HOST_URI}/**`);