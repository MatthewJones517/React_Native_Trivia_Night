import React from "react";
import { Image, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

import Wrapper from "../components/Wrapper";
import BigOrangeButton from "../components/BigOrangeButton";

const Welcome = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    // Display Welcome Screen
    <Wrapper>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <BigOrangeButton
        width="350"
        height="150"
        handlePress={() => navigation.navigate("Play")}
      >
        <Text style={styles.buttonText}>START GAME</Text>
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
  buttonText: {
    fontFamily: "Roboto-Bold",
    fontSize: 36,
    color: "#004AAD",
  },
});

export default Welcome;
