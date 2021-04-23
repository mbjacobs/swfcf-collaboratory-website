import React, { Fragment } from "react";

import SidebarMenu from "./components/SidebarMenu";
import Footer from "./components/Footer";

import "../src/styles/Page.css";

export default function App() {
  return (
    <Fragment>
      <div id="page">
        <SidebarMenu/>
      </div>
      <Footer/>
    </Fragment>
  );
}

