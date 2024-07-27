import React from "react";
import { View } from "react-native";
import styles from "./Login.style";
import Label from "../../components/common/label/labelGen";
import SimpleInput from "../../components/common/inputs/simpleInput";
import emailIcon from "../../../assets/icons/EmailIcon.png";
import passWordIcon from "../../../assets/icons/PasswordIcon.png";
import LabelLink from "../../components/common/label/labelLink";
import ButtonGen from "../../components/common/buttons/buttonGen";
import ButtonSocialRegister from "../../components/common/buttons/buttonSocialRegister";

const Login = () => {
  const teste = () => {
    console.log("teste");
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Label
          text="Bem vindo de volta"
          textColor="#1D1617"
          fontFamily="PoppinsBold"
          fontSize={26}
        />
      </View>
      <View style={styles.inputView}>
        <SimpleInput icon={emailIcon} placeholder="Email" />
        <SimpleInput icon={passWordIcon} passwordVisible={true} placeholder="Senha"/>
      </View>
      <View style={styles.forgotPasswordView}>
        <LabelLink
          text="Esqueceu a senha?"
          fontFamily="PoppinsRegular"
          textColor="#C58BF2"
          fontSize={18}
          action={teste}
        />
      </View>
      <View style={styles.buttonView}>
        <ButtonGen action={teste} text="Login"/>
      </View>
      <View style={styles.viewDivider}>
          <View style={styles.divider} />
          <Label text="Ou" fontFamily="InterRegular" fontSize={20} />
          <View style={styles.divider} />
        </View>

        <View style={styles.viewSocial}>
          <ButtonSocialRegister action={teste} />
        </View>

        <View style={styles.viewRegister}>
          <Label
            text="Não tem uma conta?"
            textColor="#1D1617"
            fontFamily="PoppinsRegular"
            fontSize={18}
          />
          <LabelLink
            text="Registrar"
            textColor="#C58BF2"
            action={teste}
            fontFamily="PoppinsRegular"
            fontSize={18}
          />
        </View>
    </View>
  );
};

export default Login;
