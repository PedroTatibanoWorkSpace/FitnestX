import React from "react";
import { View, Image } from "react-native";
import Label from "../../../components/common/label/labelGen";
import RoundButton from "../../../components/common/buttons/roundButton";
import styles from "./EntryThree.style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router/typesRoutes";
import manRunning from "../../../../assets/images/ManRunning.png"
import { useNavigation } from "@react-navigation/native";


type EntryOneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EntryThree"
>;

const EntryThree = () => {

  const navigation = useNavigation<EntryOneNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={manRunning} style={styles.image} />
      </View>
      <View style={styles.textContentView}>
        <Label
          text= "Vamos dar um 'Burn'"
          fontFamily="PoppinsBold"
          fontSize={25}
        />
        <Label
          text="Vamos te ajudar a queimar suas calorias"
          fontFamily="PoppinsRegular"
          fontSize={15}
        />
      </View>
      <View style={styles.buttonContainer}>
      <RoundButton roundComplete={true} action={() => navigation.navigate("EntryOne")} />
      </View>
    </View>
  );
};

export default EntryThree;
