import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "flex-end",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fitnestXContentView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContentView: {
    marginTop: "-2%",
    marginBottom: "70%",
    alignItems:"center"
  },
  buttonContentView: {
    justifyContent: "center",
    alignItems: "center",
    height: "7%", 
    marginBottom:"8%"
  },
});

export default styles;
