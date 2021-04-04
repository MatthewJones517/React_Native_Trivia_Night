import React from "react";
import { Text, SafeAreaView } from "react-native";

import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import QABox from "../components/QABox";

const Play = () => {
  return (
    <Wrapper>
      <SafeAreaView>
        <Header />
        <QABox />
      </SafeAreaView>
    </Wrapper>
  );
};

export default Play;
