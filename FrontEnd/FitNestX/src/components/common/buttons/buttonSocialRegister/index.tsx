import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./ButtonSocialRegister.style";

interface ButtonSocialRegister {
  action: () => void;
}

const ButtonSocialRegister: React.FC<ButtonSocialRegister> = ({ action }) => {
  return (
    <TouchableOpacity style={styles.viewButton} onPress={action}>
      <Image
        source={require("../../../../../assets/icons/GoogleIcon.png")}
        style={styles.iconItem}
      />
    </TouchableOpacity>
  );
};

export default ButtonSocialRegister;
