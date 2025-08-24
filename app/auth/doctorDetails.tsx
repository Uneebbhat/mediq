import Colors from "@/constants/Colors";
import DoctorDetailsForm from "@/modules/auth/components/DoctorDetailsForm";

import { StyleSheet, Text, View } from "react-native";

export default function DoctorDetailsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.authHeadingContainer}>
          <Text style={styles.authHeadingText}>Enter Details</Text>
          <Text style={styles.authBody}>
            Your patients are waiting, login again and start managing your
            patients
          </Text>
        </View>
        <DoctorDetailsForm />
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
  signupLinkText: {
    textAlign: "center",
    fontSize: 16,
  },
  signupLink: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
