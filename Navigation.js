import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import App02 from "./App02";

const { Screen, Navigator } = createNativeStackNavigator();

export default function Navigation() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator initialRouteName="App02" screenOptions={screenOptions}>
        <Screen name="App02" component={App02} />
      </Navigator>
    </NavigationContainer>
  );
}
