import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { InputRegister, PickRegister } from "../components/FormRegister";
import Button from "../components/Button";

const FormScreen = ({ navigation }) => {
  return (
    <View style={style.parentView}>
      <ScrollView>
        <View style={style.photoView}>
          <View>
            <Image
              style={{ height: 222.21 }}
              source={require("../../assets/Mask.png")}
            />
            <Image
              style={style.photoIcon}
              source={require("../../assets/PhotoIcon.png")}
            />
          </View>
        </View>
        <View style={style.parentFormView}>
          <InputRegister title="Nama" placeholder="Masukan Nama Anda" />
          <InputRegister title="Umur" placeholder="Masukan Umur Anda" />
          <PickRegister title="Gender" />
        </View>
        <View style={style.button}>
          <Button
            title="Lanjutkan"
            onPress={() => {
              navigation.navigate("Home");
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
    paddingTop: 100,
  },
  photoView: {
    alignItems: "center",
  },
  photoIcon: {
    position: "absolute",
    bottom: 15,
    right: 25,
  },
  parentFormView: {
    height: 250,
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 5,
    marginHorizontal: 30,
  },
  button: {
    margin: 20,
    marginTop: 60,
    alignSelf: "center",
    width: 242,
  },
});
export default FormScreen;
