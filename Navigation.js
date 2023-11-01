import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Preload from "./src/screens/Preload";
import SignIn from "./src/screens/SignIn";
import SignOn from "./src/screens/SignOn";
import ForgottenPassword from "./src/screens/ForgottenPassword";

const { Screen, Navigator } = createNativeStackNavigator();

export default function Navigation() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Preload" screenOptions={screenOptions}>
        <Screen name="Preload" component={Preload} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignOn" component={SignOn} />
        <Screen name="ForgottenPassword" component={ForgottenPassword} />
      </Navigator>
    </NavigationContainer>
  );
}
