import {
  useLoaderData
} from "/build/_shared/chunk-3KSJ3RMB.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// browser-route-module:/home/bruno.vasconcellos/projects/github-remix/app/routes/github.$username.tsx?browser
init_react();

// app/routes/github.$username.tsx
init_react();
function github_username_default() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, user.login), /* @__PURE__ */ React.createElement("blockquote", null, user.bio), /* @__PURE__ */ React.createElement("img", {
    src: user.avatar_url,
    alt: user.login,
    width: "150"
  }));
}
export {
  github_username_default as default
};
//# sourceMappingURL=/build/routes/github.$username-4D7DJZ7F.js.map
