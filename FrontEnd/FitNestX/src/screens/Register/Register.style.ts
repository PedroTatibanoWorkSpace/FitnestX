import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  viewLabel: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.12,
  },
  viewInputs: {
    marginTop: windowHeight * 0.03,
    alignItems: "center",
    marginBottom: windowHeight * 0.01,
    gap: windowHeight * 0.015,
  },
  viewTerms: {
    flexDirection: "row",
    marginLeft: windowWidth * 0.1,
    gap: windowWidth * 0.01,
  },
  termsText: {
    alignItems: "flex-start",
  },
  viewRegisterButton: {
    height: windowHeight * 0.07,
    marginTop: windowHeight * 0.13,
    alignItems: "center"
  },
  viewDivider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ADA4A5",
    marginHorizontal: windowWidth * 0.04
  },
  viewSocial:{
    alignItems:"center",
    marginTop: windowHeight * 0.02
  },
  viewLogin:{
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"row",
    marginTop: windowHeight * 0.02
  }
});

export default styles;
