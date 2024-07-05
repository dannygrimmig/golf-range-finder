import * as React from "react";

import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { getCourseById } from "@/api/service";
import { CourseHeader } from "@/components/CourseHeader";
import { Distances } from "@/components/Distances";
import { HoleDetails } from "@/components/HoleDetails";
import { sampleHoles } from "@/constants/sampleHoles";

export default function Page() {
  // imported
  const { id } = useLocalSearchParams();

  // managed
  const [currentHole, setCurrentHole] = React.useState<number>(0);

  // derived
  const course = getCourseById(id);

  const onHoleChange = (direction: "up" | "down") => {
    if (direction === "up") {
      currentHole + 1 === sampleHoles.length
        ? setCurrentHole(0)
        : setCurrentHole(currentHole + 1);
    } else {
      currentHole - 1 < 0
        ? setCurrentHole(sampleHoles.length - 1)
        : setCurrentHole(currentHole - 1);
    }
  };

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

      <HoleDetails
        hole={sampleHoles[currentHole].hole}
        par={sampleHoles[currentHole].par}
        onHoleChange={onHoleChange}
      />
    </View>
  );
}
