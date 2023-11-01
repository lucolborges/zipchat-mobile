import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function SignOn() {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  const handleInput = (fieldName, value) => {
    setSignin({ ...signin, [fieldName]: value });
  };

  const doLogin = () => {
    const signInValues = Object.values(signin);
    const emptyField = signInValues.some((value) => value === "");
    if (emptyField) {
      return console.log("vazio");
    }

    // PARTE API

    navigation.reset({ routes: [{ name: "Chat" }] });
  };

  return (
    <View  style={styles.container}>
      
    
        
        <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8'
  }
});
