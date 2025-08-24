import Button from "@/components/button";
import Input from "@/components/input";
import useLogin from "../hooks/useLogin";

import { StyleSheet, Text, View } from "react-native";

const LoginForm = () => {
  const { loading, formData, handleChange, handleSubmit } = useLogin();

  return (
    <View style={styles.authFormContainer}>
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
          autoCapitalize="none"
          value={formData.password}
          onChangeText={(text: string) => handleChange("password", text)}
        />
      </View>

      {/* Buttons */}
      <View>
        <Button
          title="Login"
          onPress={handleSubmit}
          disabled={loading || !formData.email || !formData.password}
        />
        <Button
          title="Google"
          variant="secondary"
          customIcon={require("@/assets/images/google-icon.png")}
          onPress={() => console.log("Google Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authFormContainer: {
    gap: 12,
    marginTop: 32,
  },
});

export default LoginForm;
