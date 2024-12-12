// React 代码优化
import React from "react";

class Cpn extends React.Component {
  componentWillUnmount() {}

  render() {
    return <div>cpn</div>;
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

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  toggle = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { counter, isShow } = this.state;

    return (
      <div>
        <div>counter： {counter}</div>
        <button onClick={this.increment}>+1</button>
        <hr />
        <button onClick={this.toggle}>切换</button>
        {isShow && <Cpn />}
      </div>
    );
  }
}
