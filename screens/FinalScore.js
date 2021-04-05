import React, { useContext } from "react";
import { Image, StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import { GameContext } from "../components/Context";

import Wrapper from "../components/Wrapper";
import BigOrangeButton from "../components/BigOrangeButton";

const FinalScore = ({ navigation }) => {
  // Bring in Game Context
  const { score, actions } = useContext(GameContext);

  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    // Display Final Score Screen
    <Wrapper>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>FINAL SCORE:</Text>
        <Text style={styles.scoreText}>{score}</Text>
      </View>

      <BigOrangeButton
        width="350"
        height="150"
        handlePress={() => {
          actions.resetGame();
          navigation.navigate("Play");
        }}
      >
        <Text style={styles.buttonText}>PLAY AGAIN</Text>
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
  scoreText: {
    fontFamily: "Roboto-Bold",
    fontSize: 50,
    color: "#ffffff",
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
});

export default FinalScore;
