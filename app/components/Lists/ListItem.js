import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightgrey}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberofLines={1} style={styles.title}>
              {title}
            </AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
          <MaterialCommunityIcons
            color={colors.mediumgrey}
            name="chevron-right"
            size={23}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
  subtitle: {
    color: colors.mediumgrey,
  },
});

export default ListItem;
