import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="heading" tabIndex="5">
    Shobhit is here using JSX🚀
  </h1>
);

//React functional component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>React Functional Component</h1>
    <Footer />
  </div>
);

const Footer = () => {
  return (
    <div id="footer">
      <h3>This is a footer to help</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
