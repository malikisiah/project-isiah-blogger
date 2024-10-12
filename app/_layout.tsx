import { Stack } from "expo-router";
import { TRPCReactProvider } from "@/trpc/react";

export default function RootLayout() {
  return (
    <TRPCReactProvider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </TRPCReactProvider>
  );
}
