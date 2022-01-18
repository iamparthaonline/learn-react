import { useState } from "react";
import CountClass from "./CountClass";

/** Functional component using useState hook */
const Count = function (props) {
  const [count, setCount] = useState(props.initialValue);
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>Function Based Count: {count}</p>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <div>
        {count % 2 !== 0 && (
          <div
            id="red"
            style={{
              margin: "10px",
              height: "100px",
              width: "100px",
              backgroundColor: "red",
            }}
          ></div>
        )}

        {count % 2 === 0 && (
          <div
            id="blue"
            style={{
              margin: "10px",
              height: "100px",
              width: "100px",
              background: "blue",
            }}
          ></div>
        )}
      </div>
      <hr />

      <button
        onClick={function () {
          setShow(!show);
        }}
      >
        Show Class Component
      </button>
      {show && (
        <div>
          <CountClass initialValue={count} />
        </div>
      )}
    </div>
  );
};

export default Count;
