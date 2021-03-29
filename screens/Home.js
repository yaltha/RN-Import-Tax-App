import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles._homeContainer}>
      <Text style={styles._welcomeText}>Welcome to Import Tax Calculator</Text>
      <TouchableOpacity
        style={styles._btnCalc}
        onPress={() => navigation.navigate("Calculation")}
      >
        <Text style={styles._btnCalcText}>Calculate Import Tax</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles._btnAbout}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles._btnAboutText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  _homeContainer: {
    alignItems: "center",
    paddingVertical: 60,
  },
  _welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30 * 2,
  },
  _btnCalc: {
    alignSelf: "center",
    backgroundColor: "darkblue",
    paddingVertical: 60,
    marginVertical: 20,
    width: 320,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _btnCalcText: {
    color: "gold",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  _btnAbout: {
    alignSelf: "center",
    backgroundColor: "gold",
    paddingVertical: 20,
    width: 320,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _btnAboutText: {
    color: "darkblue",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
});
