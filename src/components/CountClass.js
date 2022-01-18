import React, { Component } from "react";

/** Class component using state */
class CountComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue,
      text: "",
      numberOfWords: 0,
    };
    console.log("constructed");
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    console.log("mounted");
  }

  componentDidUpdate(nextState, prevState) {
    console.log("updated", { nextState, prevState });
  }

  componentWillUnmount() {
    console.log("going to be unmounted");
  }

  render() {
    return (
      <div>
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
            }}
          >
            <input
              type="text"
              name="sentence"
              onChange={(event) => {
                this.setState({
                  text: event.target.value,
                });
              }}
              value={this.state.text}
            />
            <button type="submit">Submit</button>
          </form>
          <p>Number of Words: {this.state.numberOfWords}</p>
        </div>
      </div>
    );
  }
}
export default CountComponent;
