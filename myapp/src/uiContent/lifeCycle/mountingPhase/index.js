import React, { Component } from "react";
import ProfileCard from "../../profile/profileCard";
import axios from "axios";


export default class Mounting extends Component {
  constructor(props) {
    // console.log("constructing");
    super(props);
    this.state = { products: [],color:"red" };
  }

  componentDidMount() {
    // console.log("mounting");
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ products: json });
    //   });

    axios.get("https://fakestoreapi.com/products").then((res)=>{this.setState({products:res.data})})
  }

  

  render() {
    // console.log("rendering");
    return (
      <div>
        {/* <h1 style={{color:this.state.color}}>hello</h1> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {this.state.products.map((a, b) => {
            return <ProfileCard img={a.image} title={a.title} desc={a.description} info={a.category} />;
          })}
        </div>
      </div>
    );
  }
}
