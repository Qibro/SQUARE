import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={style.parentView} onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  parentView: {
    backgroundColor: "#267466",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    elevation: 4,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Button;
