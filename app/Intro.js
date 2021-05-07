import React from "react";
import { View, Text } from "react-native";
import Constant from "expo-constants";
const IntroComponent = (props) => {
  return (
    <View
      style={{
        backgroundColor: "tomato",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // borderBottomRightRadius: 40,
        // borderBottomLeftRadius: 40,
        borderRadius: 40,
        // opacity: 0.5,
      }}
    >
      <Text
        style={{
          marginTop: Constant.statusBarHeight,
          color: "white",
          backgroundColor: "black",
        }}
      >
        {props.First}
      </Text>
      <Text
        style={{
          marginTop: Constant.statusBarHeight,
          color: "white",
          backgroundColor: "green",
        }}
      >
        {props.Second}
      </Text>
    </View>
  );
};

export default IntroComponent;
