import { StyleSheet, Text, View } from "react-native";
import { ChangeHoleButton } from "./ChangeHoleButton";

export function HoleDetails(props: {
  hole: number;
  par: number;
  onHoleChange: (direction: "up" | "down") => void;
}) {
  const { hole, par, onHoleChange } = props;

  return (
    <View style={styles.details_container}>
      <ChangeHoleButton direction="Last" onClick={() => onHoleChange("down")} />

      <HoleDetail title={hole} label="Hole" />
      <HoleDetail title={par} label="Par" />

      <ChangeHoleButton direction="Next" onClick={() => onHoleChange("up")} />
    </View>
  );
}

function HoleDetail(props: { title: number; label: string }) {
  return (
    <View style={styles.detail_container}>
      <Text style={styles.detail_number}>{props.title}</Text>
      <Text style={styles.detail_label}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details_container: {
    padding: 16,
    backgroundColor: "#226D47",
    borderRadius: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detail_number: {
    color: "white",
    fontFamily: "OutfitRegular",
    fontSize: 32,
  },
  detail_label: {
    color: "white",
    fontFamily: "OutfitLight",
  },
});
