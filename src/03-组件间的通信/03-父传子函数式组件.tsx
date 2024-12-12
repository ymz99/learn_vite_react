import React from "react";

// class Cpn extends React.Component<{ name: string; age: number }, State> {
//   // constructor(props: { name: string; age: number }) {
//   //   super(props);
//   //   console.log("props", props);
//   // }
//   render() {
//     return (
//       <div>
//         子组件数据展示：{`name: ${this.props.name}, age:${this.props.age}`}
//       </div>
//     );
//   }
// }

function Cpn(props: { name: string; age: number }) {
  return <div>子组件数据展示：{`name: ${props.name}, age:${props.age}`}</div>;
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
    return (
      <div>
        <Cpn name="why" age={50}></Cpn>
        <hr />
        <Cpn name="who" age={30}></Cpn>
      </div>
    );
  }
}
