import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ItemSymptomps = ({ title, desc, src }) => (
  <View style={style.item}>
    <Image style={{ flex: 1, resizeMode: "center" }} source={src} />
    <View style={style.textView}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.desc}>{desc}</Text>
    </View>
  </View>
);

const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 10,
    height: 100,
    width: 190,
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 3,
    borderRadius: 8,
    alignItems: "center",
  },
  textView: {
    flex: 2,
    marginLeft: 10,
    top: 0,
  },
  title: {
    fontSize: 14,
    color: "#338A7B",
  },
  desc: {
    fontSize: 10,
  },
});

export default ItemSymptomps;
