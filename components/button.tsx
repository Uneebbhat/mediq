import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
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
  icon?: keyof typeof Ionicons.glyphMap; // vector icon name
  customIcon?: ImageSourcePropType; // for custom images
  iconPosition?: "left" | "right";
}

export default function Button({
  title,
  onPress,
  loading = false,
  variant = "primary",
  disabled = false,
  icon,
  customIcon,
  iconPosition = "left",
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
        <View style={styles.content}>
          {(icon || customIcon) && iconPosition === "left" && (
            <>
              {icon && (
                <Ionicons
                  name={icon}
                  size={18}
                  color={textColor}
                  style={{ marginRight: 8 }}
                />
              )}
              {customIcon && (
                <Image
                  source={customIcon}
                  style={{ width: 20, height: 20, marginRight: 8 }}
                  resizeMode="contain"
                />
              )}
            </>
          )}

          <Text style={[styles.text, { color: textColor }]}>{title}</Text>

          {(icon || customIcon) && iconPosition === "right" && (
            <>
              {icon && (
                <Ionicons
                  name={icon}
                  size={18}
                  color={textColor}
                  style={{ marginLeft: 8 }}
                />
              )}
              {customIcon && (
                <Image
                  source={customIcon}
                  style={{ width: 20, height: 20, marginLeft: 8 }}
                  resizeMode="contain"
                />
              )}
            </>
          )}
        </View>
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
    alignItems: "center",
    gap: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
});
