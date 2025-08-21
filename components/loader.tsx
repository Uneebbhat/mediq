import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

interface LoaderProps {
  size?: "small" | "large";
  color?: string;
}

export default function Loader({
  size = "large",
  color = "#007bff",
}: LoaderProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
