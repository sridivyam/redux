import React, { Component } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.counterChangedHnadler = this.counterChangedHnadler.bind(this);
  }

  counterChangedHnadler(action, value) {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        console.log("no match found, skipping");
        break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.state.counter} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHnadler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHnadler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHnadler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHnadler("sub", 5)}
        />
      </div>
    );
  }
}

export default Counter;
