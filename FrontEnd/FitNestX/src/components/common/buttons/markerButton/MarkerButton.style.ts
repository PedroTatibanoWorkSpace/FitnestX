import { StyleSheet, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


export default StyleSheet.create({
  buttonContainer: {
    borderRadius: windowHeight * 0.01,
    backgroundColor: "#FFF",
    padding: 5,
    borderWidth: 2,
    borderColor: "#ADA4A5",
    width: windowWidth * 0.06,
    height: windowHeight* 0.03,
    justifyContent:"center",
    alignItems:"center"
  },
  button: {
    width: windowWidth * 0.04,
    height: windowHeight* 0.02,
    borderRadius: windowHeight * 0.007,
  },
});
