import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>HOME</Text>
      <Text>Welcome to Import Tax Calculator</Text>
      {/* <TouchableOpacity>
        <Text>Calculate Import Tax</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>About</Text>
      </TouchableOpacity> */}
      <Button
        title="Calculate"
        onPress={() => navigation.navigate("Calculation")}
      />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
