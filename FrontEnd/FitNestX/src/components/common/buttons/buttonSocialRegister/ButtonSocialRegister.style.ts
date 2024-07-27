import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  viewButton: {
    width: windowWidth * 0.14,
    height: windowHeight * 0.06,
    borderWidth: 1,
    borderRadius: windowHeight * 0.02,
    borderColor: "#ADA4A5",
    justifyContent: "center",
    alignItems: "center",
  },
  iconItem: {
    width: 30,
    height: 30,
  },
});

export default styles;
