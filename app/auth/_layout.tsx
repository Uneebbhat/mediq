import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="login" options={{ title: "Log In" }} />
      <Stack.Screen name="doctorDetails" options={{ title: "Log In" }} />
    </Stack>
  );
}
