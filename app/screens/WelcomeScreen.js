import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton.js";

import colors from "../config/colors.js";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />

        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    padding: 25,
  },

  logo: {
    width: 120,
    height: 120,
    position: "relative",
  },

  logoContainer: {
    position: "relative",
    alignItems: "center",
    marginTop: 70,
  },

  tagline: {
    color: "tomato",
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
