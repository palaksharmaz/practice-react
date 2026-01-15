import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste Reactt!!"
// );

// JSX - HTML-like or XML-like syntax
// JSX is transpiled before it reaches JS Engine by PARCEL using "Babel"

const heading = <h1 className="head" tabIndex="i">Namaste React using JSX</h1>

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);