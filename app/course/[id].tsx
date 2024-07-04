import * as React from "react";

import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { getCourseById } from "@/api/service";
import { Course } from "@/definitions/course";
import { CourseHeader } from "@/components/CourseHeader";
import { Distances } from "@/components/Distances";

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
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <CourseHeader course={course} />

      <Distances front={104} middle={115} back={119} />

      <View
        style={{
          padding: 32,
        }}
      >
        <Text>botom</Text>
      </View>
    </View>
  );
}
