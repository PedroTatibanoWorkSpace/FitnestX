import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./ButtonGen.styles";
import Label from "../../label/labelGen";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonGenProps {
  action?: () => void;
  text: string;
}

const ButtonGen: React.FC<ButtonGenProps> = ({ action, text }) => {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={action}>
      <LinearGradient
        colors={["#9DCEFF", "#92A3FD"]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0 }}
        style={styles.buttonGradient}
      >
        <Label
          text={text}
          textColor="#FFF"
          fontSize={16}
          fontFamily="PoppinsBold"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonGen;
