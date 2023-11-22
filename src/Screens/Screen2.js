import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const artwork1 = require("../assets/images/getstarted/artwork1.png");
const artwork2 = require("../assets/images/getstarted/artwork2.png");
const artwork3 = require("../assets/images/getstarted/artwork3.png");

const data = [
  {
    id: 1,
    image: artwork1,
    text: "Share Your Favourite Books With Your Family And Friends",
  },
  {
    id: 2,
    image: artwork2,
    text: "Discovery 20 Million Books Shelved Online",
  },
  {
    id: 3,
    image: artwork3,
    text: "Buy and Sell Books With Us",
  },
];

const Screen2 = () => {



  return (
    <View style={styles.container}>

    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },

});
