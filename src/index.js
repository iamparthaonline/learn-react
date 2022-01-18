import React from "react";
import ReactDom from "react-dom";
import Heading from "./components/Heading";
import Count from "./components/Count";
import Loop from "./components/Loop";

ReactDom.render(
  <div>
    <Heading title="Hello Props" />
    <Count initialValue={5} />
    <hr />
    <hr />
    <Loop />
  </div>,
  document.getElementById("react-learn")
);
