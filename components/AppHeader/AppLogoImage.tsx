import { Image } from "react-native";

export function AppLogoImage() {
  return (
    <Image
      style={{
        width: 45,
        height: 45,
        justifyContent: "flex-start",
      }}
      source={require("@/assets/images/icon-nobackground.png")}
    />
  );
}
