import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  inputView: {
    height: windowHeight * 0.06,
    width: "85%",
    borderRadius: windowHeight * 0.02,
    backgroundColor: "#F7F8F8",
    borderWidth: 1.5,
    borderColor: "#8D9393",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    fontSize: 54,
  },
  inputViewFocused: {
    borderColor: "#C4A4EC",
  },
  viewTextInput: {
    flex: 1,
    marginLeft: windowWidth * 0.02,
    fontSize: 17,
    color: "#000",
    fontFamily:"InterRegular"
  },
  icon: {
    width: windowWidth * 0.052,
    height: windowHeight * 0.025,
    marginLeft: windowWidth * 0.01,
    resizeMode:"contain"
  },
  toggleIcon: {
    width: 30,
    height: 30,
    marginRight: windowWidth * 0.02,
    resizeMode:"contain"
  },
});

export default styles;
