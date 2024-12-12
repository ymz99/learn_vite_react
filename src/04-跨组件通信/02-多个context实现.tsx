import React from "react";

// 定义两个 Context
const LevelContext = React.createContext({ level: 1 });
const UserContext = React.createContext({ username: "Guest" });

interface LevelContextType {
  level: number;
}

interface UserContextType {
  username: string;
}

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <LevelContext.Consumer>
        {(levelContext: LevelContextType) => (
          <UserContext.Consumer>
            {(userContext: UserContextType) => (
              <div>
                <div>三级组件</div>
                <div>当前等级为：{levelContext.level}</div>
                <div>用户名为：{userContext.username}</div>
              </div>
            )}
          </UserContext.Consumer>
        )}
      </LevelContext.Consumer>
    );
  }
}

// 顶层组件提供 Context 值
const App: React.FC = () => {
  return (
    <LevelContext.Provider value={{ level: 5 }}>
      <UserContext.Provider value={{ username: "JohnDoe" }}>
        <div>
          <h1>多个 Context 示例</h1>
          <Header />
        </div>
      </UserContext.Provider>
    </LevelContext.Provider>
  );
};

export default App;
