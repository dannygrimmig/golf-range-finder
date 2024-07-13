import { Text } from "react-native";

export function AppHeaderTitle(props: { title: string }) {
  return (
    <Text style={{ fontFamily: "OutfitRegular", color: "white" }}>
      {props.title}
    </Text>
  );
}
