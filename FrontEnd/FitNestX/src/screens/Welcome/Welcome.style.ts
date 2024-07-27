import { StyleSheet, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerImage: {
    alignItems: "center",
    resizeMode: "cover",
    width: "70%",
    height: "35%",
    marginTop: "30%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descriptionView: {
    marginTop: "12%",
  },
  buttonContainer: {
    height: windowHeight * 0.07,
    width:"100%",
    alignItems:"center",
    marginTop: "50%"
  },
});

export default styles;
