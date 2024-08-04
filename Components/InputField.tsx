import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface InputFieldProps {
  placeholder: string;  // Remove the `icon` prop
}

const InputField: React.FC<InputFieldProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#8a8a8a" // Darkened placeholder color
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    marginBottom: 16,
  },
  inputContainer: {
    width: "100%",
    height: 47,
    backgroundColor: "#E6E6E6", // Hex for input background
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textInput: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    color: "#737272",
    fontSize: 14,
    opacity: 0.22,
  },
});

export default InputField;
