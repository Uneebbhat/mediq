import Colors from "@/constants/Colors";
import SignupForm from "@/modules/auth/components/SignupForm";

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.authHeadingContainer}>
          <Text style={styles.authHeadingText}>Signup as Doctor</Text>
          <Text style={styles.authBody}>
            Create an account an start managing your patients seamlessly
          </Text>
        </View>

        <SignupForm />
      </View>

      <View>
        <Text style={styles.loginLinkText}>
          Already have an account?{" "}
          <Link href={"/auth/login"} style={styles.loginLink}>
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.white,
  },
  authHeadingContainer: {
    gap: 12,
  },
  authHeadingText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  authBody: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  loginLinkText: {
    textAlign: "center",
    fontSize: 16,
  },
  loginLink: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
