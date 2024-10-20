import { Stack } from "expo-router";
import { TRPCReactProvider } from "@/trpc/react";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const theme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "#22d3ee",
      secondary: "black",
    },
  };

  return (
    <TRPCReactProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </TRPCReactProvider>
  );
}
