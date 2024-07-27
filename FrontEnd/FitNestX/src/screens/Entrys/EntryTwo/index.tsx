import React from "react";
import { View, Image } from "react-native";
import styles from "./EntryTwo.style";
import womanSmartphone from "../../../../assets/images/WomanWithSmartphone.png";
import Label from "../../../components/common/label/labelGen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router/typesRoutes";
import { useNavigation } from "@react-navigation/native";
import RoundButton from "../../../components/common/buttons/roundButton";

type EntryOneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EntryTwo"
>;

const EntryTwo = () => {
  const navigation = useNavigation<EntryOneNavigationProp>();

  const nextPage = () => {
    navigation.navigate("EntryThree")
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={womanSmartphone} style={styles.image} />
      </View>
      <View style={styles.textContentView}>
        <Label
          text="Aumente sua perfomance"
          fontFamily="PoppinsBold"
          fontSize={25}
        />
        <Label
          text="Comunicaremos seu resultado"
          fontFamily="PoppinsRegular"
          fontSize={15}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton roundComplete={false} action={nextPage}/>
      </View>
    </View>
  );
};

export default EntryTwo;
