import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { Course } from "@/definitions/course";

export function CourseSearchCard(props: { course: Course }) {
  const { course } = props;

  return (
    <Link
      href={{
        pathname: "/course/[id]",
        params: { id: course.id },
      }}
    >
      <View style={styles.course_card}>
        <Text style={styles.course_name}>{course.name}</Text>
        <Text style={styles.course_city}>{course.location}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  course_card: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderColor: "black",
    borderBottomWidth: 0.5,
  },
  course_name: {
    fontSize: 16,
    fontFamily: "OutfitRegular",
  },
  course_city: {
    fontFamily: "OutfitLight",
  },
});
