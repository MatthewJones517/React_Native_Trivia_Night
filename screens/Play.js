import React, { useContext, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { GameContext } from "../components/Context";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import QABox from "../components/QABox";
import RevealButton from "../components/RevealButton";
import ScoringButtons from "../components/ScoringButtons";

const Play = () => {
  // Bring in Game Context
  const { actions, questionsLoading, isAnswerRevealed } = useContext(
    GameContext
  );

  // We only want this to be called once per game, so calling the API after
  // initial componenet render
  useEffect(() => {
    actions.newGame();
  }, []);

  if (questionsLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <Wrapper>
        <SafeAreaView style={styles.container}>
          <Header />
          <QABox />
          {
            // Display appropriate buttons
            isAnswerRevealed ? <ScoringButtons /> : <RevealButton />
          }
        </SafeAreaView>
      </Wrapper>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default Play;
