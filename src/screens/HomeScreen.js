import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Picker,
  FlatList,
} from "react-native";
import Home from "../components/Welcome";
import CaseData from "../components/CaseData";
import ItemSymptomps from "../components/ItemSymptomps";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    desc: "Demam, suhu tubuh diatas 37 derajat celsius",
    src: require("../../assets/FeverIcon.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Kelelahan",
    desc:
      "Badan terasa lesu dan lelah walaupun tidak melakukan aktifitas yang berat",
    src: require("../../assets/CoughIcon.png"),
  },
];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <ItemSymptomps title={item.title} desc={item.desc} src={item.src} />
  );
  return (
    <View style={style.parentView}>
      <ScrollView>
        <Home name="Ibrahim" />
        <View style={style.caseLocationView}>
          <Text style={style.headingText}>Update Kasus Covid19</Text>
          <Picker style={{ width: 110 }}>
            <Picker.Item label="Indonesia" value="1" />
          </Picker>
        </View>
        <View style={style.dataView}>
          <CaseData
            title="Positif"
            totalCase="523k"
            src={require("../../assets/PositifCaseIcon.png")}
          />
          <CaseData
            title="Sembuh"
            totalCase="437k"
            src={require("../../assets/RecoverCaseIcon.png")}
          />
          <CaseData
            title="Meninggal"
            totalCase="16,5k"
            src={require("../../assets/DeadCaseIcon.png")}
          />
          <CaseData
            title="Total Kasus"
            totalCase="960k"
            src={require("../../assets/TotalCaseIcon.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text style={style.headingText}>Gejala Covid 19</Text>
          <Text style={{ fontSize: 12, color: "#8E8C8C" }}>Lihat Semua</Text>
        </View>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={style.mapView}>
          <Text style={style.headingText}>Peta Penyebaran Covid19</Text>
        </View>
        <Image
          style={{
            resizeMode: "center",
            alignSelf: "center",
            width: 313.31,
            height: 151.22,
            marginTop: 20,
          }}
          source={require("../../assets/MapDummy.png")}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  parentView: {
    backgroundColor: "white",
    height: "100%",
  },
  dataView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  caseLocationView: {
    marginTop: 35,
    marginHorizontal: 20,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  mapView: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});
export default HomeScreen;
