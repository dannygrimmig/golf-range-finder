import { StyleSheet, Text, View } from "react-native";

export function Distances(props: {
  front: number;
  middle: number;
  back: number;
}) {
  const { front, middle, back } = props;

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <View>
          <Text style={styles.front_back}>{back}</Text>
          <Text style={styles.label}>BACK</Text>
        </View>
        <View>
          <Text style={styles.middle}>{middle}</Text>
          <Text style={styles.label}>MIDDLE</Text>
        </View>
        <View>
          <Text style={styles.front_back}>{front}</Text>
          <Text style={styles.label}>FRONT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  middle: {
    fontSize: 112,
    padding: 0,
    textAlign: "right",
    fontFamily: "OutfitRegular",
  },
  front_back: {
    fontSize: 64,
    textAlign: "right",
    fontFamily: "OutfitLight",
  },
  label: {
    fontSize: 12,
    fontFamily: "OutfitLight",
    textAlign: "right",
  },
});
