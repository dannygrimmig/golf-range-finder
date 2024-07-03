import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams();

  return <Text>Course: {id}</Text>;
}
