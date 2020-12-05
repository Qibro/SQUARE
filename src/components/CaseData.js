import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const CaseData = ({ src, title, totalCase }) => {
  console.log(src);
  return (
    <View style={style.parent}>
      <Image source={src} />
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{totalCase}</Text>
      <Text style={{ fontSize: 11 }}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    flexDirection: "column",
    alignItems: "center",
    height: 70,
    width: 70,
    justifyContent: "space-evenly",
  },
});
export default CaseData;
