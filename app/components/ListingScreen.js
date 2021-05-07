import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "./Screen";
import Card from "./Card";
import colors from "../config/colors";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Listings = [
  {
    id: 1,
    title: "Red jacket",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "1000",
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(Listings) => Listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightgrey,
  },
});
export default ListingScreen;
