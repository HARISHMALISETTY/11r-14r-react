import React, { Component } from "react";

class SampleForm extends Component {
  constructor() {
    super();
    this.state = { fname: "", fullname: "", sname: "",mob:"" };
  }

  handleChange = (event) => {
  
    const {name,value} = event.target;
    this.setState({ [name]: value });    
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ fullname: this.state.fname + this.state.sname +this.state.mob});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="fname" onChange={this.handleChange} />
          <input type="text" name="sname" onChange={this.handleChange} />
          <input type="text" name="mob" onChange={this.handleChange} />
          <input type="submit" />
        </form>

        <h1>{this.state.fullname}</h1>
      </div>
    );
  }
}

export default SampleForm;
