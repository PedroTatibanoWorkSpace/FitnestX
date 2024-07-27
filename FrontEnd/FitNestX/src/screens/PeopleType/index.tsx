import React, { useState } from "react";
import { View } from "react-native";
import styles from "./PeopleType.style";
import CardType from "../../components/common/cards/cardType";
import Label from "../../components/common/label/labelGen";
import ButtonGen from "../../components/common/buttons/buttonGen";

const PeopleType = () => {
  const [currentType, setCurrentType] = useState<string>("");

  const test = () => {
    console.log(currentType);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Label
          text="Qual seu tipo?"
          textColor="#1D1617"
          fontSize={26}
          fontFamily="PoppinsBold"
        />
      </View>
      <View style={styles.description}>
        <Label
          text="Isso ajudará a você escolher seu melhor treino"
          textColor="#7B6F72"
          fontFamily="PoppinsRegular"
          fontSize={18}
        />
      </View>
      <View style={styles.containerCardType}>
        <CardType onTypeChange={setCurrentType} />
      </View>
      <View style={styles.buttonContainer}>
      <ButtonGen text="Confirmar" action={test} />
      </View>
    </View>
  );
};

export default PeopleType;
