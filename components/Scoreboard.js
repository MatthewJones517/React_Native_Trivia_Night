import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const Scoreboard = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.white, styles.title]}>SCORE:</Text>
        <Text style={[styles.white, styles.score]}>500</Text>
        <Text style={[styles.white, styles.questionNum]}>Question 2 of 10</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "#ffffff",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 36,
  },
  score: {
    fontFamily: "Roboto-Regular",
    fontSize: 36,
  },
  questionNum: {
    fontFamily: "Roboto-Light",
    fontSize: 18,
  },
});

export default Scoreboard;
