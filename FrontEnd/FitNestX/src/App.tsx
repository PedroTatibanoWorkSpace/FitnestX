import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Router from './router/router';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    PoppinsRegular: require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    InterRegular: require("../assets/fonts/inter/Inter-Regular.ttf")
  });

  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <Router />
  );
};

export default App;
