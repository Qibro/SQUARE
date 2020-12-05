import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import Button from "../components/Button";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={style.parentView}>
      <ScrollView>
        <Image
          style={{ width: 376, height: 370 }}
          source={require("../../assets/WelcomeLanding.png")}
        ></Image>
        <View style={style.welcomView}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#267466",
              fontWeight: "bold",
            }}
          >
            Selamat datang di aplikasi Self Quarantine. Ayo bersama lawan
            COVID19.
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "black",
            }}
          >
            Self Quarantine adalah aplikasi pencatatan kondisi harian untuk
            pemantauan pasien Covid19 baik dengan atau tanpa gejala
          </Text>
          <Image source={require("../../assets/LandingIcon.png")} />
          <Button
            title="Lanjutkan"
            onPress={() => {
              navigation.navigate("Form");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  parentView: {
    backgroundColor: "#E7F3F1",
    height: "100%",
  },
  welcomView: {
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 50,
    justifyContent: "space-around",
    height: 250,
  },
});

export default LandingScreen;
