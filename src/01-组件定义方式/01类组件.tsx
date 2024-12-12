import React from "react";

export default class App extends React.Component {
  constructor() {
    super("");
    this.state = {
      message: "abc",
    };
  }
  render() {
    return <div>{/* <div>{this.state?.message}</div> */}</div>;
  }
}
