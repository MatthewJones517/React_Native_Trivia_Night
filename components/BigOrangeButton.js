import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BigOrangeButton = ({ width, height, handlePress, children }) => {
  // Tweak sizing based on passed in props to create the cool double color effect
  const backgroundProps = {
    width: width - 5,
    height: height - 5,
  };

  const foregroundProps = {
    width: width - 10,
    height: height - 10,
    marginTop: 0 - height,
  };

  // Display the actual button
  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <View style={[styles.background, backgroundProps]} />
        <View style={[styles.foreground, foregroundProps]}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FF914D",
    borderRadius: 30,
  },
  foreground: {
    backgroundColor: "#FFDE59",
    borderRadius: 30,
    marginLeft: -5,
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default BigOrangeButton;
