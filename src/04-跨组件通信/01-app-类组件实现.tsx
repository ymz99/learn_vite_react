import React from "react";

interface LevelContextType {
  level: number;
}

const LevelContext = React.createContext({
  level: 1,
});

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
    return (
      <div>
        <div>一级组件</div>
        <LevelContext.Provider value={{ level: 30 }}>
          <Content></Content>
        </LevelContext.Provider>
        <Main />
      </div>
    );
  }
}

class Content extends React.Component<Record<string, never>, State> {
  render(): React.ReactNode {
    return (
      <div>
        <div>二级组件</div>
        <Header />
      </div>
    );
  }
}

class Header extends React.Component<Record<string, never>, State> {
  static contextType = LevelContext; // 声明 contextType
  declare context: LevelContextType; // 明确 context 的类型
  render(): React.ReactNode {
    return (
      <div>
        <div>三级组件</div>
        <div>传递数据为：{this.context.level}</div>
      </div>
    );
  }
}

class Main extends React.Component<Record<string, never>, State> {
  static contextType = LevelContext; // 声明 contextType
  declare context: LevelContextType; // 明确 context 的类型
  render(): React.ReactNode {
    return (
      <div>
        <div>默认值组件</div>
        <div>传递数据为：{this.context.level}</div>
      </div>
    );
  }
}

Header.contextType = LevelContext;
