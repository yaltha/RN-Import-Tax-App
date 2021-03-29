import React from "react";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View>
      <Text style={styles._aboutTitleText}>Import Tax Calculator</Text>
      <Text style={styles._aboutText}>
        Mollit nostrud laborum irure Lorem duis consequat deserunt. Sit Lorem
        enim excepteur Lorem est fugiat. Dolore nulla ut culpa do nostrud cillum
        amet consectetur consectetur. Lorem cupidatat cillum laborum tempor
        irure sint ipsum elit non amet officia proident velit exercitation. Ut
        irure consectetur ullamco eiusmod velit. Excepteur minim sit tempor
        laborum sit pariatur veniam nisi. Adipisicing anim cillum ad aliqua
        nisi. Aute exercitation incididunt pariatur enim eiusmod ullamco
        excepteur elit reprehenderit tempor.
      </Text>
      <Text style={styles._bottomText}>Import Tax Calculator @2021</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  _aboutTitleText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  _aboutText: {
    lineHeight: 30,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  _bottomText: {
    textAlign: "center",
    marginVertical: 20,
  },
});
