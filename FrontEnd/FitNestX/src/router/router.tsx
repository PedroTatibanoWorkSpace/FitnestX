import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EntryOne from "../screens/Entrys/EntryOne";
import EntryTwo from "../screens/Entrys/EntryTwo";
import EntryThree from "../screens/Entrys/EntryThree";
import Register from "../screens/Register";
import PeopleConfig from "../screens/PeopleConfig";
import PeopleType from "../screens/PeopleType";
import Login from "../screens/Login"
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="EntryOne" component={EntryOne} />
        <Stack.Screen name="EntryTwo" component={EntryTwo} />
        <Stack.Screen name="EntryThree" component={EntryThree} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PeopleConfig" component={PeopleConfig} />
        <Stack.Screen name="PeopleType" component={PeopleType} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
