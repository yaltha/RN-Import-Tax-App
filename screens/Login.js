import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
