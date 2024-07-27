import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./MarkerButton.style";

interface MarkerButtonProps {
  initialState: boolean;
  onPress: (state: boolean) => void;
}

const MarkerButton: React.FC<MarkerButtonProps> = ({ initialState, onPress }) => {
  const [isPressed, setIsPressed] = useState(initialState);

  useEffect(() => {
    setIsPressed(initialState);
  }, [initialState]);

  const handlePress = () => {
    const newState = !isPressed;
    setIsPressed(newState);
    onPress(newState);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isPressed ? "#92A3FD" : "#FFF" },
        ]}
        onPress={handlePress}
      />
    </View>
  );
};

export default MarkerButton;
