import React from "react";

class Cpn extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
  }
  render() {
    return <div>cpn</div>;
  }
  componentWillUnmount() {
    console.log("Cpn componentWillUnmount方法执行");
  }
}

interface State {
  counter: number;
  isShow: boolean;
}
export default class App extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    console.log("constructor方法执行");
    this.state = {
      counter: 0,
      isShow: true,
    };
  }
  render() {
    const { counter, isShow } = this.state;
    console.log("render方法执行");
    return (
      <div>
        <div>counter： {counter}</div>
        <button onClick={() => this.increment()}>+1</button>
        <hr />
        <button onClick={() => this.toggle()}>切换</button>
        {isShow && <Cpn />}
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  toggle() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate方法执行");
  }
  componentDidMount() {
    console.log("componentDidMount方法执行");
  }
}
