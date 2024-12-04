import React, { Component } from "react";
import axios from "axios";
import ProfileCard from "../../profile/profileCard";
import Loader from "../../../utilities/loadSpinner";

export default class UpdatingPhase extends Component {
  constructor() {
    super();
    this.state = { count: 0, product: null };
  }

  componentDidUpdate(prvsProps, prvsState) {
    if (prvsState.count !== this.state.count) {
      console.log(`count value updated by ${this.state.count}`);
      axios
        .get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => {
          this.setState({ product: res.data });
        });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count >= 10) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(prvsProps, prvsState) {
    console.log(prvsState, "snapshot");
    return null;
  }

  increement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { count, product } = this.state; // destructuring of variable from state object
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <h1>{count}</h1>
          <button onClick={this.increement}>Next</button>
          <button onClick={this.decreement} disabled={count <= 0}>
            Previous
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {!product ? (
            <Loader />
          ) : (
            <ProfileCard
              img={product.image}
              title={product.title}
              desc={product.description}
              info={product.category}
            />
          )}
        </div>
      </div>
    );
  }
}
