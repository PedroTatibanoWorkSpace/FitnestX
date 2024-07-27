import React, { useRef, useState } from "react";
import {
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styles from "./SimpleInput.style";

interface SimpleInputProps {
  placeholder?: string;
  icon?: number;
  passwordVisible?: boolean;
}

const SimpleInput: React.FC<SimpleInputProps> = ({
  placeholder,
  icon,
  passwordVisible,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handlePress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.inputView, isFocused && styles.inputViewFocused]}>
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput
          ref={inputRef}
          style={styles.viewTextInput}
          placeholder={placeholder}
          placeholderTextColor={"#ADA4A5"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={passwordVisible && !isPasswordVisible}
        />
        {passwordVisible && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={
                isPasswordVisible
                  ? require("../../../../../assets/icons/HiddenEye.png")
                  : require("../../../../../assets/icons/ShowEye.png")
              }
              style={styles.toggleIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SimpleInput;
