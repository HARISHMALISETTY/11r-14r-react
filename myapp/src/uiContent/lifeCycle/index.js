import React, { Component } from "react";
import ProfileCard from "../profile/profileCard";
import axios from "axios";

export default class LifeCycle extends Component {
  constructor() {
    // console.log("constructing");
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    // console.log("mounting");
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ products: json });
    //   });

    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({ products: res.data });
    });
  }

  static getDerivedStateFromProps() {
    // console.log("statedderiving from props");
    return null;
  }

  render() {
    // console.log("rendering");
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {this.state.products.map((a, b) => {
            return (
              <ProfileCard
                img={a.image}
                title={a.title}
                desc={a.description}
                info={a.category}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
