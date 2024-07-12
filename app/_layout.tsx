import * as React from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Image, Text } from "react-native";

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
        headerRight: () => <LogoTitle />,
        headerTitle: () => (
          <Text style={{ fontFamily: "OutfitRegular", color: "white" }}>
            Green Retriever
          </Text>
        ),
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
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
