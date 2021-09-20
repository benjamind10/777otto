import React, { Component } from "react";
import Magayo from "./apis/Magayo";

class Results extends Component {
  state = { res: [] };

  componentDidMount = async () => {
    const response = await Magayo.get();
    console.log(response);

    this.setState({ res: response.status });
  };

  render() {
    return (
      <div>
        Florida Pick 3 Result: Error Code: {this.state.res} (Max API Requests)
      </div>
    );
  }
}

export default Results;
