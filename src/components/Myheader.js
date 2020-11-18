import React, { Component } from "react";
import { View, Text } from "react-native";

import "../assets/css/header.css";

class MyHeader extends Component {
  render() {
    return (
      <div className="hmaincontainer">
        <View>
          <Text>MyHeader</Text>
        </View>
      </div>
    );
  }
}

export default MyHeader;
