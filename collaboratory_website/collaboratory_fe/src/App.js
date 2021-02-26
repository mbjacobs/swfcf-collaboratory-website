import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FixedMenuLayout from "./components/FixedMenuLayout";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <FixedMenuLayout />
      </Fragment>
    );
  }
}

export default App;