import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import Icon from "react-native-vector-icons/dist/FontAwesome";

const Login = ({ navigation }) => {
  return (
    <View style={styles._signupContainer}>
      <Text style={styles._signupText}>Signup</Text>
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
        style={styles._btnSignup}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles._btnSignupText}>Login</Text>
      </TouchableOpacity>
      {/* <View style={styles._loginOptionsContainer}>
        <TouchableOpacity style={styles._loginOptions}>
          <Icon name={"github"} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles._loginOptions}>
          <Icon name={"facebook-square"} size={40} />
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles._loginText}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  _signupContainer: {
    paddingVertical: 40 * 2,
  },
  _signupText: {
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
  _btnSignup: {
    alignSelf: "center",
    backgroundColor: "darkblue",
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
  _btnSignupText: {
    color: "gold",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  _loginOptionsContainer: {},
  _loginText: {
    textAlign: "center",
  },
});
