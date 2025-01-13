import React, { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `Component updated. Previous counter value: ${prevState.counter}, Current counter value: ${this.state.counter}`
    );
  }

  componentWillUnmount() {
    console.log("Component is about to unmount.");
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Lifecycle Logger</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

export default LifecycleLogger;
