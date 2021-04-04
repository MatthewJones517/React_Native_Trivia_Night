import React from "react";
import { Image, StyleSheet } from "react-native";

import Wrapper from "../components/Wrapper";

const Welcome = () => {
  return (
    <Wrapper>
      <Image source={require("../assets/logo.png")} style={styles.image} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    resizeMode: "contain",
  },
});

export default Welcome;
