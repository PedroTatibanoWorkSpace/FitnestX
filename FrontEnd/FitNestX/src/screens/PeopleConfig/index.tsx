import React from "react";
import {
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import womanTraining from "../../../assets/images/WomanTraining.png";
import styles from "./PeopleConfig.style";
import { RootStackParamList } from "../../router/typesRoutes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Label from "../../components/common/label/labelGen";
import GenderDropDown from "../../components/common/dropDown/GenderDropDown";
import DateTimeInput from "../../components/common/inputs/dateTimeInput";
import NumberInput from "../../components/common/inputs/numberInput";
import PersonalizedView from "../../components/common/personalizedView";
import balanceIcon from "../../../assets/icons/BalanceIcon.png";
import heightIcon from "../../../assets/icons/Height.png";
import ButtonGen from "../../components/common/buttons/buttonGen";


type EntryOneNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PeopleConfig"
>;

const PeopleConfig = () => {
  let stateTest: any;

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image source={womanTraining} style={styles.image} />
          </View>
          <View style={styles.containerLabel}>
            <Label
              text="Vamos completar o seu perfil"
              textColor="#1D1617"
              fontSize={25}
              fontFamily="PoppinsBold"
            />
            <Label
              text="Isso ajudará a saber mais sobre você"
              textColor="#7B6F72"
              fontSize={18}
              fontFamily="InterRegular"
            />
          </View>
          <View style={styles.inputView}>
            <GenderDropDown onSelect={stateTest} />
            <DateTimeInput onSelect={stateTest} />
            <View style={styles.measurement}>
              <NumberInput icon={balanceIcon} placeholder="Seu peso" />
              <PersonalizedView text="KG" />
            </View>
            <View style={styles.measurement}>
              <NumberInput icon={heightIcon} placeholder="Sua altura" />
              <PersonalizedView text="CM" />
            </View>
          </View>
        <View style={styles.buttonView}> 
            <ButtonGen text="Próximo"/>
        </View>
        </View>
      </TouchableWithoutFeedback>
  );
};

export default PeopleConfig;
