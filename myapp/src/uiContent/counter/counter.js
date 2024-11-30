import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 2, color: "blue" };
  }
  handleEventOneInc = () => {
    this.setState({ counter: this.state.counter + 1, color:"aqua" });
  };
  handleEventOneDec = () => {
    this.setState({ counter: this.state.counter - 1,color:"green" });
  };
  handleEventTwoInc = () => {
    this.setState({ counter: this.state.counter + 2 ,color:"orange"});
  };
  handleEventTwoDec = () => {
    this.setState({ counter: this.state.counter - 2,color:"pink" });
  };
  handleEventFiveInc = () => {
    this.setState({ counter: this.state.counter + 5,color:"violet" });
  };
  handleEventFiveDec = () => {
    this.setState({ counter: this.state.counter - 5, color:"black" });
  };
  render() {
    return (
      <>
        <button onClick={this.handleEventOneInc}>+1</button>
        <button onClick={this.handleEventOneDec}>-1</button>
        <button onClick={this.handleEventTwoInc}>+2</button>
        <h1 style={{ color: this.state.color }}> {this.state.counter}</h1>
        <button onClick={this.handleEventTwoDec}>-2</button>
        <button onClick={this.handleEventFiveInc}>+5</button>
        <button onClick={this.handleEventFiveDec}>-5</button>
      </>
    );
  }
}

export default Counter;
