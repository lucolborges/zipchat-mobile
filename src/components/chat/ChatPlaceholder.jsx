import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export function ChatPlaceholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.Name}>ZIPCHAT</Text>
      <Text style={styles.span}>Digite algum sintoma 👌 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  Name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
    color: "white",
  },
  span: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
