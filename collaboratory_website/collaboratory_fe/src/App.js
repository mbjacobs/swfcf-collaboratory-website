import React, { Component, Fragment } from "react";
import Page from "./components/Page";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Page/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;