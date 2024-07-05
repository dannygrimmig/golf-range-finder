import { Text, View } from "react-native";

export function HoleDetails(props: {
  hole: number;
  par: number;
  onHoleChange: (direction: "up" | "down") => void;
}) {
  const { hole, par, onHoleChange } = props;

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "lightgray",
        borderRadius: 32,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text
        style={{ fontFamily: "OutfitLight" }}
        onPress={() => onHoleChange("down")}
      >
        Last
      </Text>
      <HoleDetail detail={hole} description="Hole" />
      <HoleDetail detail={par} description="Par" />
      <Text
        style={{ fontFamily: "OutfitLight" }}
        onPress={() => onHoleChange("up")}
      >
        Next
      </Text>
    </View>
  );
}

function HoleDetail(props: { detail: number; description: string }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "OutfitRegular",
          fontSize: 32,
        }}
      >
        {props.detail}
      </Text>
      <Text
        style={{
          fontFamily: "OutfitLight",
        }}
      >
        {props.description}
      </Text>
    </View>
  );
}
