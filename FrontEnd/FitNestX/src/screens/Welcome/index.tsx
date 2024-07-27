import React from "react";
import styles from "./Welcome.style";
import { View, Image } from "react-native";
import womanAndManImage from "../../../assets/images/WomanAndMan.png";
import Label from "../../components/common/label/labelGen";
import ButtonGen from "../../components/common/buttons/buttonGen";

const Welcome = () => {
  const name = "Pedro";
  const teste = () => {
    console.log(teste)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={womanAndManImage} style={styles.image} />
      </View>
      <View style={styles.descriptionView}>
        <Label
          text={`Bem vindo, ${name}`}
          textColor="#1D1617"
          fontFamily="PoppinsBold"
          fontSize={25}
        />
        <Label
          text={"Tudo pronto para se juntar conosco"}
          textColor="#7B6F72"
          fontFamily="PoppinsRegular"
          fontSize={18}
        />
      </View>
      <View style={styles.buttonContainer}>
    <ButtonGen action={teste} text="Ir para Home"/>
      </View>
    </View>
  );
};

export default Welcome;
