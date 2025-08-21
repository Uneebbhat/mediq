import { Stack } from "expo-router";

import CustomHeader from "@/components/CustomHeader";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          header: () => <CustomHeader title="Home" />,
        }}
      />
    </Stack>
  );
}
