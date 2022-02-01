import {
  useLoaderData
} from "/build/_shared/chunk-6NDA4BXL.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/bruno.vasconcellos/projects/github-remix/app/routes/github.$username.tsx?browser
init_react();

// app/routes/github.$username.tsx
init_react();
function github_username_default() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ React.createElement("p", null, user.login);
}
export {
  github_username_default as default
};
//# sourceMappingURL=/build/routes/github.$username-PC3ZRKFW.js.map
