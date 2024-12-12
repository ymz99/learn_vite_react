import React from "react";

interface Props {
  btnClick: () => void; // 定义 props 中的 btnClick 为一个函数
}

class CountetBtn extends React.Component<Props, State> {
  render(): React.ReactNode {
    const { btnClick } = this.props;
    return (
      <div>
        <button onClick={btnClick}>+1</button>
      </div>
    );
  }
}

interface State {
  counter: number;
  isShow: boolean;
}
export default class App extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      counter: 0,
      isShow: true,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <div>数量：{counter}</div>
        <button onClick={() => this.increment()}>+1</button>
        <hr />
        <CountetBtn btnClick={this.increment.bind(this)}></CountetBtn>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
