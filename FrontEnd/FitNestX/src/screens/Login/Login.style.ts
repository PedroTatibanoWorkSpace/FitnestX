import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

container:{
flex: 1
},
title:{
    marginTop: "10%"
},
inputView:{
    marginTop:"8%",
    alignItems:"center",
    gap: windowHeight * 0.02
},
forgotPasswordView:{
    width:"100%",
    alignItems:"center"
},
buttonView:{
    height: windowHeight * 0.07,
    alignItems:"center",
    marginTop:"80%"
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
  viewRegister:{
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"row",
    marginTop: windowHeight * 0.02
  }

});

export default styles;