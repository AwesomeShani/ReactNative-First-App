import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "./Screen";
import ListItem from "./Lists/ListItem";
import colors from "../config/colors";
import Icon from "./Icon";
import ListItemSeparator from "./Lists/ListItemSeparator";

const menuItems = [
  {
    title: "My Title",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.title}>
        <ListItem
          title="Zeeshan"
          subtitle="Shani47@gmail.com"
          image={require("../assets/1.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightgrey,
  },
  title: {},
});

export default AccountScreen;
