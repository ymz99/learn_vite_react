import React from "react";

interface propsType {
  onClick: () => void;
}

class ClassCpn extends React.Component<propsType> {
  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.props.onClick}>+1</button>
      </div>
    );
  }
}

function FunCpn(props: propsType) {
  return (
    <div>
      <button onClick={props.onClick}>-1</button>
    </div>
  );
}

interface State {
  counter: number;
}

export default class App extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      counter: 10,
    };
  }
  render(): React.ReactNode {
    return (
      <div>
        <div>当前计数：{this.state.counter}</div>
        <ClassCpn onClick={() => this.increment()} />
        <hr />
        <div>函数组件</div>
        <FunCpn onClick={() => this.decrement} />
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
}
