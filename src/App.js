import React, { Component } from "react";
import MyHeader from "./components/Myheader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";

import "./styles.css";

class MainClass extends Component {
  render() {
    return (
      <div className="maincontainer">
        <MyHeader></MyHeader>
        <MyBody></MyBody>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

export default MainClass;
