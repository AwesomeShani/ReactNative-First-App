import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={[styles.Container]}>
      <View style={styles.CloseIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.DeleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        style={styles.Image}
        source={require("../assets/ImageScreen.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CloseIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  Container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
  DeleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  Image: {
    // height: "100%",
    // top: 150,
    width: "100%",
    marginTop: 100,
  },
});

export default ViewImageScreen;
