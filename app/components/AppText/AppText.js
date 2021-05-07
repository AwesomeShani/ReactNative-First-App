import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../config/Styles";

// AppText is basically a TextBox. which is customised,
// Same as the real TextBox for textInput,

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
