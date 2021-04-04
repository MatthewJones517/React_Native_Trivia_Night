import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 128,
    resizeMode: "contain",
  },
});

export default Header;
