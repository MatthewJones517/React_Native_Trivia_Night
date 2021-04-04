import React, { useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { GameContext } from "../components/Context";

const QABox = () => {
  const {
    questionsLoading,
    isAnswerRevealed,
    questions,
    questionNumber,
  } = useContext(GameContext);

  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded || questionsLoading) {
    return <ActivityIndicator />;
  }

  if (!questionsLoading && questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error reaching question API.</Text>
      </View>
    );
  }

  if (isAnswerRevealed) {
    <View style={styles.container}>
      <Text style={styles.text}>{questions[questionNumber - 1].answer}</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{questions[questionNumber - 1].question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginVertical: 30,
    padding: 20,
    width: 350,
    height: 350,
    borderRadius: 30,
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "#004AAD",
    fontFamily: "Roboto-Regular",
  },
});

export default QABox;
