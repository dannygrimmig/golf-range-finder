import * as React from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Image, Text } from "react-native";
import { AppHeaderTitle } from "@/components/AppHeader/AppHeaderTitle";
import { AppLogoImage } from "@/components/AppHeader/AppLogoImage";

export default function RootLayout() {
  const [loaded] = useFonts({
    OutfitRegular: require("../assets/fonts/Outfit-Regular.ttf"),
    OutfitLight: require("../assets/fonts/Outfit-Thin.ttf"),
    OutfitSemiBold: require("../assets/fonts/Outfit-SemiBold.ttf"),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#226D47",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => <AppLogoImage />,
        headerTitle: () => <AppHeaderTitle title="Green Retriever" />,
      }}
    />
  );
}

function LogoTitle() {
  return (
    <Image
      style={{
        width: 45,
        height: 45,
        justifyContent: "flex-start",
      }}
      source={require("../assets/images/icon-nobackground.png")}
    />
  );
}
