import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText/AppText";

function ItemPicker({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.data}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  data: {
    padding: 20,
  },
});

export default ItemPicker;
