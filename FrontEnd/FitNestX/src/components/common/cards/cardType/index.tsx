import React from "react";
import { View, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSharedValue, useDerivedValue, runOnJS } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import styles from "./CardType.style";
import Label from "../../label/labelGen";
import { typesPerson } from "./typesPerson";

type CardTypeProps = {
  onTypeChange: (type: string) => void;
};

const CardType: React.FC<CardTypeProps> = ({ onTypeChange }) => {
  const progress = useSharedValue<number>(0);
  const currentSlideIndex = useSharedValue<number>(0); 
  const { width, height } = Dimensions.get("window");

  useDerivedValue(() => {
    const index = Math.round(progress.value);
    if (index !== currentSlideIndex.value) {
      currentSlideIndex.value = index; 
      if (index >= 0 && index < typesPerson.length) {
        runOnJS(onTypeChange)(typesPerson[index].Type);
      }
    }
  }, [progress.value, currentSlideIndex.value, onTypeChange]);

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        width={width}
        height={height}
        data={typesPerson}
        loop={false}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.90,
          parallaxScrollingOffset: 80,
        }}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        renderItem={({ index }) => (
          <View key={index} style={styles.slide}>
            <LinearGradient
              colors={["#9DCEFF", "#92A3FD"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image source={typesPerson[index].Image} style={styles.image} />
                </View>
                <View style={styles.title}>
                  <Label
                    text={typesPerson[index].Type}
                    textColor="#FFF"
                    fontFamily="PoppinsBold"
                    fontSize={21}
                  />
                  <View style={styles.separator} />
                </View>
                <View style={styles.description}>
                  <Label
                    text={typesPerson[index].Description}
                    textColor="#FFF"
                    fontFamily="PoppinsRegular"
                    fontSize={18}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
        )}
      />
    </View>
  );
};

export default CardType;
