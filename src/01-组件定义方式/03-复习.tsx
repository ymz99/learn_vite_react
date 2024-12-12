import React from "react";

export default class App extends React.Component<Record<string, never>> {
  constructor(prosp: Record<string, never>) {
    super(prosp);
    this.state = {};
  }
  render(): React.ReactNode {
    return <div></div>;
  }
}
