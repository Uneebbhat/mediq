import CustomHeader from "@/components/CustomHeader";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          header: () => <CustomHeader title="Home" />,
        }}
      />
      <Stack.Screen name="auth" />
    </Stack>
  );
}
