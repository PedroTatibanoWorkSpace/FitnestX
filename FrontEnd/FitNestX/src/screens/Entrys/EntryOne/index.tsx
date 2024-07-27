import React from "react";
import { View } from "react-native";
import Label from "../../../components/common/label/labelGen";
import styles from "./EntryOne.style";
import ButtonGen from "../../../components/common/buttons/buttonGen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../router/typesRoutes";

type EntryOneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EntryOne"
>;

const EntryOne = () => {
  const navigation = useNavigation<EntryOneNavigationProp>();

  const nextPage = () => {
    navigation.navigate("EntryTwo");
  };

  return (
    <View style={styles.container}>
      <View style={styles.fitnestXContentView}>
        <Label
          text="Fitnest"
          textColor="#1D1617"
          fontFamily="PoppinsBold"
          fontSize={36}
        />

        <Label
          text="X"
          textColor="#C4A4EC"
          fontFamily="PoppinsBold"
          fontSize={50}
        />
      </View>

      <View style={styles.textContentView}>
        <Label
          text="Todo mundo pode treinar"
          textColor="#7B6F72"
          fontFamily="PoppinsRegular"
          fontSize={18}
        />
      </View>

      <View style={styles.buttonContentView}>
        <ButtonGen action={nextPage} text="Próximo" />
      </View>
    </View>
  );
};

export default EntryOne;
