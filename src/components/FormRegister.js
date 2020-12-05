import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Picker } from "react-native";

const InputRegister = ({ title, placeholder }) => {
  return (
    <View>
      <Text style={style.formText}>{title}</Text>
      <View style={style.inputView}>
        <TextInput placeholder={placeholder} style={style.form}></TextInput>
      </View>
    </View>
  );
};

const PickRegister = ({ title }) => {
  const [gender, setGender] = useState("Male");
  return (
    <View>
      <Text style={style.formText}>{title}</Text>
      <View style={style.pickerView}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => {
            setGender(itemValue);
          }}
        >
          <Picker.Item label="Pilih Jenis Kelamin Anda" value="0" />
          <Picker.Item label="Laki laki" value="1" />
          <Picker.Item label="Wanita" value="2" />
        </Picker>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  formText: {
    left: 10,
    color: "#267466",
    fontWeight: "bold",
  },
  inputView: {
    backgroundColor: "white",
    height: 45,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    marginTop: 6,
  },
  pickerView: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 6,
    elevation: 3,
  },
  form: {
    backgroundColor: "white",
  },
});

export { InputRegister, PickRegister };
