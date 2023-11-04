import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ChatMessageInput } from "./ChatMessageInput";

export function Footer({ onSendMessage, disabled }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <ChatMessageInput onSend={onSendMessage} disabled={disabled} />
        <Text style={styles.span}>Projeto eixo 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    borderTopWidth: 1,
    borderTopColor: " rgb(75 85 99)",
    padding: 8,
  },
  inputArea: {
    maxWidth: "97%",
    alignSelf: "center",
    width: "100%",
  },
  span: {
    fontSize: 10,
    color: "gray",
    textAlign: "center",
    paddingTop: 5,
  },
});
