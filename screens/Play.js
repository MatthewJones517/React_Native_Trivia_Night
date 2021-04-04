import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import QABox from "../components/QABox";
import RevealButton from "../components/RevealButton";

const Play = () => {
  return (
    <Wrapper>
      <SafeAreaView style={styles.container}>
        <Header />
        <QABox />
        <RevealButton />
      </SafeAreaView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default Play;
