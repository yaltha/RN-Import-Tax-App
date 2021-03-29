import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles._loginContainer}>
      <Text style={styles._loginText}>Login</Text>
      <Text style={styles.inputLabelText}>Email:</Text>
      <TextInput
        style={styles._input}
        placeholder="Email..."
        // onChangeText={}
      />
      <Text style={styles.inputLabelText}>Password:</Text>
      <TextInput
        style={styles._input}
        placeholder="Password..."
        // onChangeText={}
      />
      <TouchableOpacity
        style={styles._btnLogin}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles._btnLoginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles._forgetPaswordText}>Forget password?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles._signupText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  _loginContainer: {
    paddingVertical: 40 * 2,
  },
  _loginText: {
    textAlign: "center",
    color: "darkblue",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 40,
  },
  inputLabelText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  _input: {
    alignSelf: "center",
    width: 320,
    height: 60,
    padding: 20,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: "white",
    // borderColor: "gold",
    // borderWidth: 1,
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
  _btnLogin: {
    alignSelf: "center",
    backgroundColor: "gold",
    marginVertical: 30,
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
  _btnLoginText: {
    color: "darkblue",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  _forgetPaswordText: {
    textAlign: "center",
  },
  _signupText: {
    textAlign: "center",
  },
});
