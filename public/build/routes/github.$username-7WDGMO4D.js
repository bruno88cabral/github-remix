import {
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/bruno.vasconcellos/projects/github-remix/app/routes/github.$username.tsx?browser
init_react();

// app/routes/github.$username.tsx
init_react();
var loader = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params.username}`);
  return {
    user: await res.json()
  };
};
export {
  loader
};
//# sourceMappingURL=/build/routes/github.$username-7WDGMO4D.js.map
