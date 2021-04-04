import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import Wrapper from "../components/Wrapper";
import BigOrangeButton from "../components/BigOrangeButton";

const Welcome = () => {
  return (
    <Wrapper>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <BigOrangeButton width="350" height="150">
        <Text>START GAME</Text>
      </BigOrangeButton>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 224,
    resizeMode: "contain",
    marginBottom: 40,
  },
});

export default Welcome;
