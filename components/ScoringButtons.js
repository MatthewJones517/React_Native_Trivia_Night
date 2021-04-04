import React from "react";
import { Text, View, StyleSheet, ActivityIndicator, Image } from "react-native";
import { useFonts } from "expo-font";

import BigOrangeButton from "../components/BigOrangeButton";

const ScoringButtons = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <BigOrangeButton width="125" height="125">
          <Image
            source={require("../assets/thumbsdown.png")}
            style={styles.thumbsUpDown}
          />
          <Text style={styles.buttonText}>Doh!</Text>
        </BigOrangeButton>

        <BigOrangeButton width="125" height="125">
          <Image
            source={require("../assets/thumbsup.png")}
            style={styles.thumbsUpDown}
          />
          <Text style={styles.buttonText}>I Got It!</Text>
        </BigOrangeButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 325,
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#004AAD",
    fontSize: 28,
    fontFamily: "Roboto-Regular",
  },
  thumbsUpDown: {
    width: 50,
    height: 55,
    resizeMode: "contain",
  },
});

export default ScoringButtons;
