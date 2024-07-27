import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import styles from "./GenderDropDown.style";
import genderOptions from "./dataGender.json";
import genderIcon from "../../../../../assets/icons/GenderIcon.png";
import arrowDownIcon from "../../../../../assets/icons/ArrowDownIcon.png";

interface GenderDropDownProps {
  onSelect: (option: string) => void;
}

const GenderDropDown: React.FC<GenderDropDownProps> = ({ onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const selectOption = (option: any) => {
    setSelectedOption(option.label);
    setIsVisible(false);
    onSelect(option.label); 
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.inputView}>
          <Image source={genderIcon} style={styles.icon} />
          <Text style={styles.textStyle}>
            {selectedOption || "Selecione seu gênero"}
          </Text>
          <Image source={arrowDownIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        {isVisible && (
          <View style={styles.dropdown}>
            <FlatList
              data={genderOptions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => selectOption(item)}
                  style={styles.option}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
  );
};

export default GenderDropDown;
