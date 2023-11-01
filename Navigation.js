import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import App02 from "./App02";
import Preload from "./src/screens/Preload";
import SignIn from "./src/screens/SignIn";

const { Screen, Navigator } = createNativeStackNavigator();

export default function Navigation() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator initialRouteName="App02" screenOptions={screenOptions}>
        <Screen name="App02" component={Preload} />
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
}
