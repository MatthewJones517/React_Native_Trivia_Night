import React, { useContext } from "react";
import { Text, ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { GameContext } from "../components/Context";

import BigOrangeButton from "../components/BigOrangeButton";

const RevealButton = () => {
  const { questions, questionNumber, actions, questionsLoading } = useContext(
    GameContext
  );

  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded || questionsLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <BigOrangeButton
        width="300"
        height="125"
        handlePress={() => actions.revealAnswer()}
      >
        <Text style={styles.revealButtonTextHead}>REVEAL ANSWER</Text>
        <Text style={styles.revealButtonTextPoints}>
          Point Value: {questions[questionNumber - 1].value}
        </Text>
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
