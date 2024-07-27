import { StyleSheet } from "react-native";

interface LabelStylesProps {
  fontFamily?: string;
  fontSize?: number;
  textColor?: string;
}

const getStylesLabel = ({
  fontFamily,
  fontSize,
  textColor,
}: LabelStylesProps) => {
    
  return StyleSheet.create({
    text: {
      fontFamily: fontFamily || "",
      fontSize: fontSize,
      color: textColor || "#000",
      textAlign:"center"
    },
  });
};

export default getStylesLabel;
