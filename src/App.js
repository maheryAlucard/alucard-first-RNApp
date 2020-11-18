import React from "react";
import { View } from "react-native";
import MyHeader from "./components/Myheader";
import MyBody from "./components/MyBody";
import MyFooter from "./components/MyFooter";

import "./styles.css";

var cstyle = {
  backgroundColor: "powderblue",
  flex: 1
};

const MainClass = () => {
  return (
    <View style={cstyle}>
      <MyHeader />
      <MyBody />
      <MyFooter />
    </View>
  );
};

export default MainClass;
