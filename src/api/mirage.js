import { createServer, Model } from "miragejs"
const { REACT_APP_HOST_URI } = process.env;
let server = createServer({
  models: {
    paths: Model,
  },
  seeds(server) {
    server.create("path", {
      id: "subtitle",
      linkDisabled: false,
      type: "h2",
      text: "Recent Articles",
      ":type": "wknd/components/title",
      appliedCssClassNames: "cmp-title--underline"
    });
    server.create("path", {
      "id": "card-title",
      "linkDisabled": false,
      "type": "h1",
      "text": "Western Australia by Camper Van",
      ":type": "wknd/components/title"
    });
    server.create("path", {
      "id": "main-title",
      "linkDisabled": false,
      "type": "h2",
      "text": "WKND Guides",
      ":type": "wknd/components/title",
      "appliedCssClassNames": "cmp-title--underline"
    });
    server.create("path", {
      "id": "summary-intro",
      "text": "Meet our extraordinary travel guides. When you travel with a certified WKND guide you gain access to attractions and perspectives not found on the pages of a guide book.",
      ":type": "wknd/components/text",
      "appliedCssClassNames": "cmp-text--font-small"
    });
    server.create("path", {
      "id": "summary-content",
      "text": "WKND is a collective of outdoors, music, crafts, adventure sports, and travel enthusiasts that want to share our experiences, connections, and expertise with the world. Our objective is create a community to help like-minded adventure seekers find fun, engaging, and responsible ways to to enjoy life and create lasting memories.",
      ":type": "wknd/components/text"
    });
  }
});

server.get("/path/:id", (schema, request) => {
  const path = request.params.id;
  return schema.paths.find(path);
});

server.post("/path/:id", (schema, request) => {
  const path = request.params.id;
  const comp = schema.paths.find(path);
  const attrs = JSON.parse(request.requestBody);
  comp.update(attrs);
  return { path: attrs };
})

server.passthrough(`${REACT_APP_HOST_URI}/**`);