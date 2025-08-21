import Colors from "@/constants/Colors";
import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

export default function Button({
  title,
  onPress,
  loading = false,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const backgroundColor =
    variant === "primary"
      ? Colors.blue
      : variant === "secondary"
      ? "transparent"
      : Colors.red;

  const borderColor = variant === "secondary" ? Colors.blue : "transparent";

  const textColor = variant === "secondary" ? Colors.blue : "#fff";

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderColor }]}
      onPress={onPress}
      disabled={loading || disabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={textColor} />
          <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </View>
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  loadingContainer: {
    flexDirection: "row",
    gap: 12,
  },
});
