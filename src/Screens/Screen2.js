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

  const [selected, setSelected] = useState(data[0]);

  const setData = (element) => {
    setSelected(element);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topPanel}>
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.artworkArea}>
        <Image source={selected.image} resizeMode="contain" style={styles.artwork} />
        <Text style={styles.text}>{selected.text}</Text>
        <View style={styles.dotset}>
          {
            data.map(element => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setData(element);
                  }}
                  style={[styles.dot, selected.id == element.id ? { backgroundColor: "#FF6EA1" } : { backgroundColor: "white" } ]}
                ></TouchableOpacity>
              )
            })
          }

        </View>
        {
          selected.id == 3 ? (
            <TouchableOpacity
            activeOpacity={0.9}
              style={styles.getStartedButton}
            >
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </TouchableOpacity>
          ) : null
        }
      </View>
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
  topPanel: {
    position: "absolute",
    top: 55,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 16,
  },
  skipText: {
    color: '#969696',
    fontSize: 17,
  },
  artworkArea: {
    marginTop: 100,
  },
  artwork: {
    width: 500,
    height: 350,
  },
  text: {
    marginTop: 50,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 23,
    width: 300,
    height: 60
  },
  dotset: {
    marginTop: 30,
    alignSelf: "center",
    width: 100,
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    margin: 7,
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: "#FF6EA1",
    // backgroundColor: "#FF6EA1",
  },
  getStartedButton: {
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 7,
    width: 210,
    height: 50,
    backgroundColor: "#FF6EA1",
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedButtonText: {
    color: "white",
    fontSize: 21,
  }
});
