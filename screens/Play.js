import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import QABox from "../components/QABox";
import BigOrangeButton from "../components/BigOrangeButton";

const Play = () => {
  return (
    <Wrapper>
      <SafeAreaView style={styles.container}>
        <Header />
        <QABox />
        <BigOrangeButton
          width="300"
          height="125"
          handlePress={() => console.log("pressed")}
        >
          <Text>REVEAL ANSWER</Text>
          <Text>Point Value: 200</Text>
        </BigOrangeButton>
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
