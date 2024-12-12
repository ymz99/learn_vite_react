import React from "react";

interface State {
  name: string;
  age: number;
}

interface propsType {
  name: string;
  age: number;
}

class ClassCpn extends React.Component<propsType> {
  render(): React.ReactNode {
    return (
      <div>
        name: {this.props.name}
        age: {this.props.age}
      </div>
    );
  }
}

function FunCpn(props: propsType) {
  return (
    <div>
      name: {props.name}
      age: {props.age}
    </div>
  );
}

export default class App extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: "张三",
      age: 10,
    };
  }
  render(): React.ReactNode {
    return (
      <div>
        <div>类组件</div>
        <ClassCpn {...this.state} />
        <hr />
        <div>函数组件</div>
        <FunCpn {...this.state} />
      </div>
    );
  }
}
