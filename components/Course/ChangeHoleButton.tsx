import { Pressable, StyleSheet, Text } from "react-native";

export function ChangeHoleButton(props: {
  onClick: () => void;
  direction: string;
}) {
  const { direction, onClick } = props;
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "seagreen" : "#226D47",
        },
        styles.pressable,
      ]}
    >
      <Text style={{ color: "white", fontFamily: "OutfitLight" }}>
        {direction}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    padding: 16,
    borderRadius: 8,
  },
});
