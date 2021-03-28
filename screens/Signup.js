import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Signup = ({ navigation }) => {
  return (
    <View>
      <Text>Signup</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
