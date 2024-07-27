import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import styles from "./Register.style";
import SimpleInput from "../../components/common/inputs/simpleInput";
import profileImage from "../../../assets/icons/Profile.png";
import MarkerButton from "../../components/common/buttons/markerButton";
import ButtonSocialRegister from "../../components/common/buttons/buttonSocialRegister";
import LabelLink from "../../components/common/label/labelLink";
import Label from "../../components/common/label/labelGen";
import ButtonGen from "../../components/common/buttons/buttonGen";
import emailIcon from "../../../assets/icons/EmailIcon.png";
import passWordIcon from "../../../assets/icons/PasswordIcon.png";

const Register = () => {
  const teste = () => {
    console.log("teste");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
      <View style={styles.container}>
        <View style={styles.viewLabel}>
          <Label
            text="Crie sua conta"
            fontSize={30}
            fontFamily="PoppinsBold"
            textColor="#1D1617"
          />
        </View>
        <View style={styles.viewInputs}>
          <SimpleInput icon={profileImage} placeholder="Primeiro nome" />
          <SimpleInput icon={profileImage} placeholder="Sobrenome" />
          <SimpleInput icon={emailIcon} placeholder="Email" />
          <SimpleInput
            icon={passWordIcon}
            placeholder="Senha"
            passwordVisible={true}
          />
        </View>
        <View style={styles.viewTerms}>
          <MarkerButton initialState={false} onPress={teste} />
          <View style={styles.termsText}>
            <Label
              text="Para continuar aceite os seguintes"
              textColor="#ADA4A5"
              fontSize={15}
              fontFamily="PoppinsRegular"
            />
            <LabelLink
              action={teste}
              text="termos de uso e políticas"
              textColor="#C58BF2"
              fontSize={15}
              fontFamily="PoppinsRegular"
            />
          </View>
        </View>

        <View style={styles.viewRegisterButton}>
          <ButtonGen text={"Registrar"} action={teste} />
        </View>

        <View style={styles.viewDivider}>
          <View style={styles.divider} />
          <Label text="Ou" fontFamily="InterRegular" fontSize={20} />
          <View style={styles.divider} />
        </View>

        <View style={styles.viewSocial}>
          <ButtonSocialRegister action={teste} />
        </View>

        <View style={styles.viewLogin}>
          <Label
            text="Já tem uma conta?"
            textColor="#1D1617"
            fontFamily="PoppinsRegular"
            fontSize={18}
          />
          <LabelLink
            text="Login"
            textColor="#C58BF2"
            action={teste}
            fontFamily="PoppinsRegular"
            fontSize={18}
          />
        </View>
      </View>
      </TouchableWithoutFeedback>
  );
};

export default Register;
