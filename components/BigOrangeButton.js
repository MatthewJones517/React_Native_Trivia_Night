import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BigOrangeButton = () => {
  return (
    <View>
      <View style={styles.background} />
      <View style={styles.foreground} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 345,
    height: 145,
    backgroundColor: "#FF914D",
    borderRadius: 30,
  },
  foreground: {
    width: 340,
    height: 140,
    backgroundColor: "#FFDE59",
    borderRadius: 30,
    marginTop: -150,
    marginLeft: -5,
    zIndex: 100,
  },
});

export default BigOrangeButton;
