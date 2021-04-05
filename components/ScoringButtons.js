import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator, Image } from "react-native";
import { useFonts } from "expo-font";
import { GameContext } from "../components/Context";

import BigOrangeButton from "../components/BigOrangeButton";

const ScoringButtons = ({ navigation }) => {
  const { actions, questionNumber } = useContext(GameContext);

  const handleScoreUpdate = (isCorrect) => {
    actions.updateScore(isCorrect);

    if (questionNumber === 10) {
      navigation.navigate("FinalScore");
    }
  };

  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <BigOrangeButton
          width="125"
          height="125"
          handlePress={() => {
            handleScoreUpdate(false);
          }}
        >
          <Image
            source={require("../assets/thumbsdown.png")}
            style={styles.thumbsUpDown}
          />
          <Text style={styles.buttonText}>Doh!</Text>
        </BigOrangeButton>

        <BigOrangeButton
          width="125"
          height="125"
          handlePress={() => {
            handleScoreUpdate(true);
          }}
        >
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
