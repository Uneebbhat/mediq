import Colors from "@/constants/Colors";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomHeaderProps {
  title: string;
}

export default function CustomHeader({ title }: CustomHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    paddingTop: 30,
  },
  backBtn: {
    position: "absolute",
    top: 52,
    left: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
