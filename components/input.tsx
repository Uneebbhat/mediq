import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  error?: boolean;
  placeholder: string;
}

export default function Input({ error, style, ...props }: InputProps) {
  return (
    <TextInput
      style={[styles.input, error && styles.errorInput, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    width: "100%",
  },
  errorInput: {
    borderColor: "red",
  },
});
