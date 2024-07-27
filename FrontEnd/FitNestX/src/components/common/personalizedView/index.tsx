import React from "react";
import { View } from "react-native";
import styles from "./PersonalizeView.styles";
import { LinearGradient } from "expo-linear-gradient";
import Label from "../label/labelGen";

interface PersonalizeViewProps {
  text: string;
}

const PersonalizedView: React.FC<PersonalizeViewProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C58BF2", "#EEA4CE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientView} 
      >
        <Label text={text} textColor="#FFF" fontFamily="InterRegular" fontSize={20} />
      </LinearGradient>
    </View>
  );
};

export default PersonalizedView;
