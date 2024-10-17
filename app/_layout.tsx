import { Stack } from "expo-router";
import { TRPCReactProvider } from "@/trpc/react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <TRPCReactProvider>
      <KeyboardProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="light" />
      </KeyboardProvider>
    </TRPCReactProvider>
  );
}
