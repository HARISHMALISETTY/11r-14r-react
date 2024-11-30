import React, { Component } from "react";
import "./toggleSwitch.css";

class Toggle extends Component {
  constructor() {
    super();

    this.state = { isOn: true };
  }

  handleButton = () => {
    this.setState({ isOn: !this.state.isOn });
  };
  render() {
    return (
      <>
       <button className={this.state.isOn?"switchoff":"switchon"} onClick={this.handleButton}>{this.state.isOn?<h1>SwitchOff</h1>:<h1>SwitchON</h1>}</button>
       <h1 className={this.state.isOn?"textOff":"textOn"}> {this.state.isOn?<h1>TURNED ON</h1>:<h1>TURNED OFF</h1>}</h1>
      </>
    );
  }
}

export default Toggle;
