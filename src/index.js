import React from "react";
import ReactDom from "react-dom";
import Heading from "./components/Heading";
import Count from "./components/Count";
import CountComponent from "./components/CountClass";
import Loop from "./components/Loop";

ReactDom.render(
  <div>
    <Heading title="Hello Props" />
    <Count initialValue={5} />
    <hr />
    {/* <CountComponent initialValue={10} /> */}
    <hr />
    <Loop />
  </div>,
  document.getElementById("react-learn")
);
