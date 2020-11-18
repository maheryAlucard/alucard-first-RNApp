import React from "react";
import { View, Text } from "react-native";

import "../assets/css/header.css";
var textStyle = {
  color: "#fff"
};
const MyHeader = () => {
  return (
    <div className="hmaincontainer">
      <View>
        <Text style={textStyle}>My First Header</Text>
      </View>
    </div>
  );
};

export default MyHeader;
