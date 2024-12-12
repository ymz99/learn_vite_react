import React from "react";

function Header() {
  return <h3>header</h3>;
}

function Banner() {
  return <h3>Banner</h3>;
}

function Productlist() {
  return <h3>Productlist</h3>;
}
function Main() {
  return (
    <div>
      <Banner></Banner>
      <Productlist></Productlist>
    </div>
  );
}
function Footer() {
  return <h3>Footer</h3>;
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
    // const { counter, isShow } = this.state;
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}
