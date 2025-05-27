import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#F97316" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(tabs)/animal/index" options={{ title: "Animais" }} />

      <Stack.Screen name="login" options={{ headerShown: false }} />

      <Stack.Screen
        name="(tabs)/animal/[id]"
        options={{ title: "Detalhes do Animal" }}
      />

      <Stack.Screen
        name="(tabs)/adopted/index"
        options={{ title: "Animais Adotados" }}
      />
    </Stack>
  );
}
