import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";

const UpButton = ({ upButtonHandler }) => (
  <TouchableOpacity onPress={upButtonHandler} style={styles.upButton}>
    <Icon name="ios-arrow-up" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  upButton: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#eecd3b",
    borderRadius: 30,
    elevation: 8
  }
});

export default UpButton;
