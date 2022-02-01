import "./style.css";
// const h1 = document.createElement("h1");
// h1.classList.add("redtext");
// h1.innerText = "hello";
// document.getElementById("root").appendChild(h1);

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1 className="redtext">
    <div>Hello</div>
    <p>Paragraph</p>
  </h1>,
  document.getElementById("root")
);
