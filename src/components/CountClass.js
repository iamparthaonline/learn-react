import React, { Component } from "react";

/** Class component using state */
class ClassCountComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue,
      text: "",
      numberOfWords: 0,
    };

    this.inputRef = React.createRef();
    console.log("Constructor Method is called");
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    console.log("componentDidMount method is called");
    this.intervalReference = setInterval(() => {
      console.log("HI -- ", +new Date());
    }, 1000);
  }

  componentDidUpdate(nextState, prevState) {
    console.log("componentDidUpdate method is called", {
      nextState,
      prevState,
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalReference);
    console.log("componentWillUnmount method is called");
  }

  render() {
    return (
      <div style={{ background: "#ccc" }}>
        <p>Class Based Count: {this.state.count} </p>
        <button onClick={() => this.increaseCount()}>Increase</button>

        <div>
          {this.state.count % 2 !== 0 && (
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

          {this.state.count % 2 === 0 && (
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

        <div>
          <h2>Word counter</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const count = this.state.text.split(" ").length;
              this.setState({
                numberOfWords: count,
              });
              console.log("Reference - ", this.inputRef);
            }}
          >
            <div>
              <label>Controlled Input </label>
              <input
                type="number"
                name="sentence"
                onChange={(event) => {
                  this.setState({
                    text: event.target.value,
                  });
                }}
                value={this.state.text}
              />
            </div>

            <div>
              <label>Uncontrolled input </label>
              <input
                type="date"
                name="data"
                id="date-input"
                ref={this.inputRef}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
          <p>Number of Words: {this.state.numberOfWords}</p>
        </div>
      </div>
    );
  }
}
export default ClassCountComponent;
