import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import QABox from "../components/QABox";
import BigOrangeButton from "../components/BigOrangeButton";

const Play = () => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <Wrapper>
        <SafeAreaView style={styles.container}>
          <Header />
          <QABox />
          <RevealButton />
        </SafeAreaView>
      </Wrapper>
    );
  }
};

const RevealButton = () => {
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
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
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

export default Play;
