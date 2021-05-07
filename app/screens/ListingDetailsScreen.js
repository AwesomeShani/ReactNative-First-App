import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import SellerDetail from "../components/SellerDetail";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.sellerDetail}>
          <SellerDetail
            image={require("../assets/1.jpeg")}
            title="Zeshaan"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  sellerDetail: {
    marginVertical: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
