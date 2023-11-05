import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import IconSend from "../../../assets/icons/IconSend";

export function ChatMessageInput({ onSend, disabled }) {
  const [text, setText] = useState("");

  const handleSendMessage = () => {
    if (!disabled && text.trim() !== "") {
      onSend(text);
      setText("");
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          opacity: disabled ? 0.5 : 1,
        },
      ]}
    >
      <TextInput
        style={styles.input}
        onSubmitEditing={handleSendMessage}
        returnKeyType="send"
        value={text}
        onChangeText={(t) => setText(t)}
        editable={!disabled}
        placeholder="Digite um sintoma"
        placeholderTextColor={"gray"}
      />

      <View style={styles.icon}>
        <IconSend
          width={14}
          height={14}
          style={{ color: "white", opacity: text.length ? 1 : 0.2 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    backgroundColor: "white",
    borderColor: "rgba(31, 41, 55, .2)",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
    padding: 2,
    color: "black",
  },
});
