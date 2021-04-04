import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

const QABox = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Animal Planet is on its 11th version of this annual feature with a
          different feel from the big football game
        </Text>
      </View>
    );
  }
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
