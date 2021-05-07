import React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import BottomTabNavigator from "./app/Naviagtion/BottomTabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
