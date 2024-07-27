import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "30%",
    marginTop: "10%",
    marginLeft: windowWidth * 0.04,

  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  containerLabel:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft: "6%",
    marginTop: windowHeight * 0.04,
    gap: windowHeight * 0.01
  },
  inputView:{
    justifyContent:"center",
    marginTop: windowHeight * 0.04,
    gap: windowHeight * 0.016,
    marginLeft:"7%",
    width:"100%"
  },
  measurement:{
    flexDirection: "row",
    maxWidth: "80%",
    gap: windowWidth * 0.01
  },
  buttonView:{
    height:"7%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:windowHeight * 0.03
  }
});

export default styles;
