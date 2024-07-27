import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./DateTimeInput.styles";
import calendarIcon from "../../../../../assets/icons/CalendarIcon.png";
import arrowDownIcon from "../../../../../assets/icons/ArrowDownIcon.png";
import formatDate from "../../../../utils/formatDate";

interface DateTimeInputProps {
  onSelect: (date: Date) => void;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({ onSelect }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    if (currentDate) {
      setDate(currentDate);
      onSelect(currentDate);
    }
  };

  return (
      <View>
        <TouchableOpacity onPress={toggleDatePicker} style={styles.inputView}>
          <Image source={calendarIcon} style={styles.icon} />
          <Text style={styles.textStyle}>
            {date
              ? formatDate(date)
              : "Selecione sua data de nascimento"}
          </Text>
          <Image source={arrowDownIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
      </View>
  );
};

export default DateTimeInput;
