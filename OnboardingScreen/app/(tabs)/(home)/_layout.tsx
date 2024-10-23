import { Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: false,

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}
