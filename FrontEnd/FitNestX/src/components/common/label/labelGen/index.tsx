import React from "react";
import { Text } from "react-native";
import getStylesLabel from "./Label.styles";

interface LabelProps {
  text: string;
  fontFamily?: string;
  fontSize?: number;
  textColor?: string;
}

const Label: React.FC<LabelProps> = ({
  text,
  fontFamily,
  fontSize,
  textColor,
}) => {
  const styles = getStylesLabel({ fontFamily, fontSize, textColor });

  return (
      <Text style={[styles.text]}>{text}</Text>

  );
};

export default Label;
