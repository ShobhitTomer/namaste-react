import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Shobhit is Here 🚀"
);

const jsxHeading = <h1>Shobhit is here using JSX🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
