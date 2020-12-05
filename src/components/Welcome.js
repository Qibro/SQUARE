import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "../components/Button";

const Home = ({ name }) => {
  return (
    <View style={style.parentView}>
      <Image
        style={style.background}
        source={require("../../assets/WelcomeBG.png")}
      />
      <Image
        style={style.person}
        source={require("../../assets/WelcomePerson.png")}
      />
      <View style={style.parentTextView}>
        <Text style={style.textHeading}>HI! {name}</Text>
        <Text style={{ fontSize: 12 }}>
          Saat ini kamu dinyatakan Positif Covid19. Ayo lawan Covid19 dengan
          melakukan karantina mandiri
        </Text>
      </View>
      <View style={style.parentLocationView}>
        <Text style={{ fontSize: 10, color: "black" }}>
          Lokasi Anda Saat Ini :
        </Text>
        <View style={{ flexDirection: "row", padding: 1 }}>
          <Image source={require("../../assets/LocationIcon.png")} />
          <Text style={{ fontSize: 12, top: -3, color: "#338A7B" }}>
            Jakarta, Indonesia
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  parentView: { flexDirection: "column" },
  background: {},
  person: {
    position: "absolute",
    bottom: 0,
    left: 35,
    height: 185.63,
    width: 121.34,
  },
  parentTextView: {
    position: "absolute",
    top: 68,
    left: 168,
    width: "50%",
  },
  parentLocationView: {
    position: "absolute",
    bottom: 20,
    left: 168,
  },
  textHeading: {
    color: "#267466",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default Home;
