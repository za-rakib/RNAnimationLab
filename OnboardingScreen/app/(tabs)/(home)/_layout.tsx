// app/(tabs)/(home)/_layout.tsx
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false, // Hide header for main home screen
        }}
      />
      {/* <Stack.Screen 
        name="home2" 
        options={{ 
          title: 'Home 2',
          presentation: 'card'
        }} 
      />
      <Stack.Screen 
        name="premium" 
        options={{ 
          title: 'Premium',
          presentation: 'modal' // Optional: show as modal
        }} 
      /> */}
    </Stack>
  );
}
