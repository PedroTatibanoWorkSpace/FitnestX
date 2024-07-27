import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    maxHeight: "70%",
    width: width * 0.8,
    flex: 1,
    borderRadius: 33,
    alignItems: "center",
  },
  gradient: {
    borderRadius: height * 0.03,
    padding: 20,
  },
  imageContainer: {
    marginTop: "10%",
    width: width * 1,
    height: height * 0.35,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", 
  },
  title: {
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
  },
  separator: {
    height: 2,
    backgroundColor: "#FFF",
    marginBottom: "7%",
    width: "20%",
  },
  description: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
});

export default styles;
