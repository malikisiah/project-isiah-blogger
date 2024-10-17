import Ionicons from "@expo/vector-icons/Ionicons";

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShown: false,
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "rgb(24 24 27)",
          height: "8%",
          borderTopWidth: 0.2,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Articles",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "pencil-sharp" : "pencil-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-sharp" : "person-sharp"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
