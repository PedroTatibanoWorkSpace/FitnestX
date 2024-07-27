import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#f123",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientButton: {
    borderRadius: 30, 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  viewRoundNotComplete: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#92A3FD",
  },
  viewRoundComplete: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#92A3FD",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
