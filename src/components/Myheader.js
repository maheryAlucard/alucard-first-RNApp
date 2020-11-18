import React from "react";
import { View, Text } from "react-native";

import "../assets/css/header.css";
var textStyle = {
  color: "#fff",
  paddingLeft: 10
};
var hdrStyle = {
  backgroundColor: "steelblue",
  flex: 1,
  padding: 6
};
const MyHeader = () => {
  return (
    <View style={hdrStyle}>
      <Text style={textStyle}>My First Header</Text>
    </View>
  );
};

export default MyHeader;
