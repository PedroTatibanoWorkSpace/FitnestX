import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: "17%",
    height: windowHeight * 0.058,
    borderRadius: windowWidth * 0.03,
    overflow: "hidden",
  },
  gradientView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
