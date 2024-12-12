import React from "react";

export default class App extends React.Component<Record<string, never>> {
  render() {
    const headerSlot = <div>我是传入的header</div>;
    const mainSlot = <div>我是传入的main</div>;
    const footerSlot = <div>我是传入的footer</div>;

    return (
      <div>
        <Main
          headerSlot={headerSlot}
          mainSlot={mainSlot}
          footerSlot={footerSlot}
        />
      </div>
    );
  }
}

interface propsType {
  headerSlot: JSX.Element;
  mainSlot: JSX.Element;
  footerSlot: JSX.Element;
}
function Main(props: propsType) {
  return (
    <div>
      <div>头部:{props.headerSlot}</div>
      <hr />
      <div>身体部:{props.mainSlot}</div>
      <hr />
      <div>尾部:{props.footerSlot}</div>
      <hr />
    </div>
  );
}
