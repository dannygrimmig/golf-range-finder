import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    OutfitRegular: require("../assets/fonts/Outfit-Regular.ttf"),
    OutfitLight: require("../assets/fonts/Outfit-Thin.ttf"),
    OutfitSemiBold: require("../assets/fonts/Outfit-SemiBold.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
