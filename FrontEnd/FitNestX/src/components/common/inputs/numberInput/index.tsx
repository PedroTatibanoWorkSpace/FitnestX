import React, { useRef, useState } from "react";
import { TextInput, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./NumberInput.style";

interface NumberInputProps {
  placeholder?: string;
  icon?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ placeholder, icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handlePress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.inputView, isFocused && styles.inputViewFocused]}>
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput
          ref={inputRef}
          style={styles.viewTextInput}
          placeholder={placeholder}
          placeholderTextColor="#ADA4A5"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType="numeric"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NumberInput;
