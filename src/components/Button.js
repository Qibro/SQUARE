import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ title }) => {
  return (
    <TouchableOpacity>
      <View style={style.parentView}>
        <Text style={style.text}>{title}</Text>
      </View>
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
