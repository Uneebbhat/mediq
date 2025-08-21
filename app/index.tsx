import Button from "@/components/button";
import Input from "@/components/input";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const loading = true;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>My first app!</Text>
        <Input placeholder="Email" secureTextEntry />
        <Button title="Signup" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
