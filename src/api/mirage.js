import { createServer, Model } from "miragejs";
const { REACT_APP_HOST_URI, REACT_APP_IBIZA_URL } = process.env;

const getData = (fallback) => {
  const current = localStorage.getItem(`mirage-${fallback.id}`);
  return current ? JSON.parse(current) : fallback;
};

let server = createServer({
  models: {
    paths: Model,
  },
  seeds(server) {
    server.create(
      "path",
      getData({
        id: "subtitle",
        linkDisabled: false,
        type: "h2",
        text: "Recent Articles",
        ":type": "wknd/components/title",
        appliedCssClassNames: "cmp-title--underline",
      })
    );
    server.create(
      "path",
      getData({
        id: "card-title",
        linkDisabled: false,
        type: "h1",
        text: `Western Australia by Camper Van`,
        ":type": "wknd/components/title",
      })
    );
    server.create(
      "path",
      getData({
        id: "main-title",
        linkDisabled: false,
        type: "h2",
        text: "WKND Guides",
        ":type": "wknd/components/title",
        appliedCssClassNames: "cmp-title--underline",
      })
    );
    server.create(
      "path",
      getData({
        id: "summary-intro",
        text: "Meet our extraordinary travel guides. When you travel with a certified WKND guide you gain access to attractions and perspectives not found on the pages of a guide book.",
        ":type": "wknd/components/text",
        appliedCssClassNames: "cmp-text--font-small",
      })
    );
    server.create(
      "path",
      getData({
        id: "summary-content",
        text: "WKND is a collective of outdoors, music, crafts, adventure sports, and travel enthusiasts that want to share our experiences, connections, and expertise with the world. Our objective is create a community to help like-minded adventure seekers find fun, engaging, and responsible ways to to enjoy life and create lasting memories.",
        ":type": "wknd/components/text",
      })
    );
  },
  routes() {
    this.get("/path/:id", (schema, request) => {
      const path = request.params.id;
      return schema.paths.find(path);
    });

    this.post("/path/:id", (schema, request) => {
      const path = request.params.id;
      const comp = schema.paths.find(path);
      const attrs = JSON.parse(request.requestBody);
      comp.update({ ...attrs });
      localStorage.setItem(`mirage-${comp.attrs.id}`, JSON.stringify({ ...comp.attrs, ...attrs }));
      return { ...attrs };
    });
  },
});

server.passthrough(`${REACT_APP_HOST_URI}/**`);
server.passthrough(`${REACT_APP_IBIZA_URL}/**`);
server.passthrough("https://snazzy-tulumba-547f0e.netlify.app/**");
