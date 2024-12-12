import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App.tsx";

// import App from "./01-组件定义方式/01类组件.js";
// import App from "./01-组件定义方式/02函数组件";
// import App from "./02-react生命周期/01-生命周期";
// import App from "./03-组件间的通信/01-通信";
// import App from "./03-组件间的通信/02-父传子类组件";
// import App from "./03-组件间的通信/03-父传子函数式组件";
import App from "./03-组件间的通信/04-子传父";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
