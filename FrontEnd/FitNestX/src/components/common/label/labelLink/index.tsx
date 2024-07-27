import React from "react";
import { TouchableOpacity } from "react-native";
import Label from "../labelGen";
import styles from "./LabelLink.style";

interface LabelLinkProps {
  action: () => void;
  text: string;
  textColor: string;
  fontSize: number;
  fontFamily: string;
}

const LabelLink: React.FC<LabelLinkProps> = ({ action, text, textColor, fontSize, fontFamily }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.viewButton}>
      <Label text={text} textColor={textColor} fontFamily={fontFamily} fontSize={fontSize} />
    </TouchableOpacity>
  );
};

export default LabelLink;
