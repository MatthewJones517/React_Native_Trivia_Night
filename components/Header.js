import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import Scoreboard from "../components/Scoreboard";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <Scoreboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 155,
    height: 99,
    resizeMode: "contain",
    marginRight: 20,
  },
});

export default Header;
