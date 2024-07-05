import { Pressable, Text, View } from "react-native";

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
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Pressable onPress={() => onHoleChange("up")} style={{ padding: 16 }}>
        <Text style={{ fontFamily: "OutfitLight" }}>Last</Text>
      </Pressable>

      <HoleDetail detail={hole} description="Hole" />
      <HoleDetail detail={par} description="Par" />

      <Pressable onPress={() => onHoleChange("up")} style={{ padding: 16 }}>
        <Text style={{ fontFamily: "OutfitLight" }}>Next</Text>
      </Pressable>
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
