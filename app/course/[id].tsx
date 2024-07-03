import * as React from "react";

import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { getCourseById } from "@/api/service";
import { Course } from "@/definitions/course";

export default function Page() {
  // imported
  const { id } = useLocalSearchParams();

  // managed
  const [currentHole, setCurrentHole] = React.useState<number>(1);

  // derived
  const course = getCourseById(id);

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <CourseHeader course={course} />
    </View>
  );
}

function CourseHeader(props: { course: Course }) {
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
