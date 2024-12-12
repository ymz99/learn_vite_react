import React from "react";

const UserInfo = React.createContext<UserContextType | undefined>(undefined);

interface UserContextType {
  name: string;
  age: number;
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
      <UserInfo.Provider value={{ age: 10, name: "why" }}>
        <div>
          <div>一级组件</div>
          <ChildCpn />
        </div>
      </UserInfo.Provider>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

class ChildCpn extends React.Component<Record<string, never>> {
  constructor(props: Record<string, never>) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        <div>
          二级组件
          <hr />
          <CChildCpn />
        </div>
      </div>
    );
  }
}

class CChildCpn extends React.Component<Record<string, never>> {
  constructor(props: Record<string, never>) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <UserInfo.Consumer>
        {(userInfoContext) => {
          if (!userInfoContext) {
            return <div>Loading...</div>;
          }
          return (
            <div>信息: {userInfoContext.age + "" + userInfoContext.name}</div>
          );
        }}
      </UserInfo.Consumer>
    );
  }
}
