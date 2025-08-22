import Colors from "@/constants/Colors";
import LoginForm from "@/modules/auth/components/LoginForm";

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.loginHeadingContainer}>
          <Text style={styles.loginHeadingText}>Welcome Back 🙌</Text>
          <Text style={styles.loginBody}>
            Your patients are waiting, login again and start managing your
            patients
          </Text>
        </View>

        <LoginForm />
      </View>

      <View>
        <Text style={styles.signupLinkText}>
          Don't have an account?{" "}
          <Link href={"/auth/signup"} style={styles.signupLink}>
            Signup
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
  loginHeadingContainer: {
    gap: 12,
  },
  loginHeadingText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginBody: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  signupLinkText: {
    textAlign: "center",
    fontSize: 16,
  },
  signupLink: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
