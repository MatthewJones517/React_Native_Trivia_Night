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
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
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
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {questions[questionNumber - 1].answer.charAt(0).toUpperCase() +
            questions[questionNumber - 1].answer.replace(/\\/g, "").slice(1)}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryHeader}>Category:</Text>
        <Text style={styles.category}>
          {questions[questionNumber - 1].category.title
            .charAt(0)
            .toUpperCase() +
            questions[questionNumber - 1].category.title.slice(1)}
        </Text>
      </View>
      <Text style={styles.text}>
        {questions[questionNumber - 1].question.replace(/\\/g, "")}
      </Text>
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
  categoryHeader: {
    fontSize: 24,
    color: "#004AAD",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  category: {
    fontSize: 20,
    color: "#004AAD",
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  categoryContainer: {
    marginBottom: 30,
  },
});

export default QABox;
