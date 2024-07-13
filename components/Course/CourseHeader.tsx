import { Course } from "@/definitions/course";
import { StyleSheet, Text, View } from "react-native";

export function CourseHeader(props: { course: Course }) {
  const { course } = props;

  return (
    <View style={styles.header}>
      <Text style={styles.course_name}>{course?.name}</Text>
      <Text style={styles.course_location}>{course?.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  course_name: {
    fontSize: 16,
    fontFamily: "OutfitSemiBold",
  },
  course_location: {
    fontSize: 14,
    fontFamily: "OutfitLight",
  },
});
