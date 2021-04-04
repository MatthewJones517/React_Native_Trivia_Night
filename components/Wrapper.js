import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Wrapper = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.65)"]}
        style={styles.background}
      />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4052B3",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 500,
  },
});

export default Wrapper;
