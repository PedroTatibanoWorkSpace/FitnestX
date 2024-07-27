import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import styles from "./RoundButton.styles";
import { LinearGradient } from "expo-linear-gradient";
import arrow from "../../../../../assets/icons/Arrow.png";

interface RoundButtonProps {
  action: () => void;
  roundComplete: boolean;
}

const RoundButton: React.FC<RoundButtonProps> = ({ action, roundComplete }) => {
  return (
    <View style={roundComplete ? styles.viewRoundComplete : styles.viewRoundNotComplete}>
      
      <TouchableOpacity style={styles.containerButton} onPress={action}>
        <LinearGradient
          colors={["#9DCEFF", "#92A3FD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Image source={arrow} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default RoundButton;
