import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../components/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();
const AccountStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountStackNavigator;
