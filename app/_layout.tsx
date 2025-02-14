import React from "react";
import { Stack } from "expo-router";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
        <Stack screenOptions={{ headerShown: false}}> 
            <Stack.Screen name="index" />
        </Stack>
    </GluestackUIProvider>
  )
}
