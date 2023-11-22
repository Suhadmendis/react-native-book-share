import { Image, StyleSheet, Text, View } from "react-native";

const book = require("../assets/images/getstarted/book.png");
const cover = require("../assets/images/getstarted/cover.png");

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Image source={cover} resizeMode="contain" style={styles.cover} />
      <View style={styles.imageArea}>
        <Image source={book} resizeMode="contain" style={styles.image} />
      </View>
      <Text style={styles.mainText}>Book Share</Text>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6EA1",
    alignItems: "center",
    justifyContent: "center",
  },
  imageArea: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainText: {
    color: "white",
    marginTop: 15,
    fontSize: 20,
  },
  cover: {
    position: "absolute",
    width: 200,
    height: 950,
    left: 35,
  }
});
