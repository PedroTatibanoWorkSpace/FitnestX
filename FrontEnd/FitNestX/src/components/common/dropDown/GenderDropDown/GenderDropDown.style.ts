import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.85,
  },
  inputView: {
    height: windowHeight * 0.06,
    width: "100%",
    borderRadius: windowHeight * 0.02,
    backgroundColor: "#F7F8F8",
    borderWidth: 1.5,
    borderColor: "#8D9393",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textStyle: {
    flex: 1,
    marginLeft: windowWidth * 0.02,
    fontSize: 17,
    color: "#000",
    fontFamily: "InterRegular",
  },
  icon: {
    width: windowWidth * 0.052,
    height: windowHeight * 0.025,
    marginLeft: windowWidth * 0.01,
    resizeMode:"contain"
  },
  arrowIcon: {
    width: windowWidth * 0.052,
    height: windowHeight * 0.025,
    marginRight: windowWidth * 0.01,
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: "#F7F8F8",
    borderRadius: windowHeight * 0.02,
    borderWidth: 1.5,
    borderColor: "#8D9393",
    maxHeight: windowHeight * 0.2,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
});

export default styles;
