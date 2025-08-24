import Button from "@/components/button";
import Input from "@/components/input";
import useSignup from "../hooks/useSignup";

import { StyleSheet, Text, View } from "react-native";

const SignupForm = () => {
  const { loading, formData, handleChange, handleSubmit } = useSignup();

  return (
    <View style={styles.signupFormContainer}>
      {/* Username */}
      <View>
        <Text>Username</Text>
        <Input
          placeholder="Dr. Usman Malik"
          keyboardType="default"
          value={formData.username}
          onChangeText={(text: string) => handleChange("username", text)}
        />
      </View>

      {/* Email */}
      <View>
        <Text>Email</Text>
        <Input
          placeholder="usmanmalik@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text: string) => handleChange("email", text)}
        />
      </View>

      {/* Password */}
      <View>
        <Text>Password</Text>
        <Input
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          value={formData.password}
          autoCapitalize="none"
          onChangeText={(text: string) => handleChange("password", text)}
        />
      </View>

      {/* Buttons */}
      <View>
        <Button
          title="Signup"
          onPress={handleSubmit}
          disabled={
            loading ||
            !formData.username ||
            !formData.email ||
            !formData.password
          }
        />
        <Button
          title="Google"
          variant="secondary"
          customIcon={require("@/assets/images/google-icon.png")}
          onPress={() => console.log("Google Signup")}
          disabled={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupFormContainer: {
    gap: 12,
    marginTop: 32,
  },
});

export default SignupForm;
