import Button from "@/components/button";
import Input from "@/components/input";

import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submit
  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    // 👉 Here you can add API request logic
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.loginFormContainer}>
        {/* Email */}
        <View>
          <Text>Email</Text>
          <Input
            placeholder="usmanmalik@gmail.com"
            keyboardType="email-address"
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
            onChangeText={(text: string) => handleChange("password", text)}
          />
        </View>

        {/* Buttons */}
        <View>
          <Button title="Login" onPress={handleSubmit} />
          <Button
            title="Google"
            variant="secondary"
            customIcon={require("@/assets/images/google-icon.png")}
            onPress={() => console.log("Google Login")}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    gap: 12,
    marginTop: 32,
  },
});

export default LoginForm;
