import React, { Component } from "react";
import Home from "./Home";
import SidebarMenu from "./SidebarMenu";
import "../styles/Page.css";

class Page extends Component {
  render() {
    return (
      <div id="page">
        <SidebarMenu/>
        <Home/>
      </div>
    );
  }
}

export default Page;