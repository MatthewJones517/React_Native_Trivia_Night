import React from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import BigOrangeButton from "../components/BigOrangeButton";

const RevealButton = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <BigOrangeButton
        width="300"
        height="125"
        handlePress={() => console.log("pressed")}
      >
        <Text style={styles.revealButtonTextHead}>REVEAL ANSWER</Text>
        <Text style={styles.revealButtonTextPoints}>Point Value: 200</Text>
      </BigOrangeButton>
    );
  }
};

const styles = StyleSheet.create({
  revealButtonTextHead: {
    color: "#004AAD",
    fontSize: 25,
    fontFamily: "Roboto-Bold",
  },
  revealButtonTextPoints: {
    color: "#004AAD",
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    marginTop: 10,
  },
});

export default RevealButton;
