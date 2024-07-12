import * as React from "react";

import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import {
  calculateDistanceInYards,
  getCourseById,
  roundNumber,
} from "@/api/service";
import { CourseHeader } from "@/components/CourseHeader";
import { Distances } from "@/components/Distances";
import { HoleDetails } from "@/components/HoleDetails";
import { Coords, Hole } from "@/definitions/hole";
import { Course } from "@/definitions/course";
import { useLocation } from "@/hooks/useLocation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppHeaderTitle } from "@/components/AppHeader/AppHeaderTitle";

export default function Page() {
  // imported
  const { id } = useLocalSearchParams();

  // managed
  const [currentHoleIndex, setCurrentHoleIndex] = React.useState<number>(0);
  const { location } = useLocation();

  // derived
  let course: Course | undefined = getCourseById(id);

  if (!course) {
    return (
      <View>
        <Text>No Course</Text>
      </View>
    );
  }

  const holes: Hole[] = course?.holes;

  const currentLocation: Coords = {
    lat: location?.coords.latitude || 0,
    long: location?.coords.longitude || 0,
  };
  const greenLocation: Coords = {
    lat: holes[currentHoleIndex].coords.lat,
    long: holes[currentHoleIndex].coords.long,
  };

  const distance: number = roundNumber(
    calculateDistanceInYards(currentLocation, greenLocation)
  );

  // helpers
  const onHoleChange = (direction: "up" | "down") => {
    if (direction === "up") {
      currentHoleIndex + 1 === holes.length
        ? setCurrentHoleIndex(0)
        : setCurrentHoleIndex(currentHoleIndex + 1);
    } else {
      currentHoleIndex - 1 < 0
        ? setCurrentHoleIndex(holes.length - 1)
        : setCurrentHoleIndex(currentHoleIndex - 1);
    }
  };

  return (
    <SafeAreaProvider>
      <Stack.Screen
        options={{
          headerTitle: () => <AppHeaderTitle title={course.name} />,
        }}
      />

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

        <Distances
          front={distance - 10}
          middle={distance}
          back={distance + 10}
        />

        <HoleDetails
          hole={holes[currentHoleIndex].hole}
          par={holes[currentHoleIndex].par}
          onHoleChange={onHoleChange}
        />
      </View>
    </SafeAreaProvider>
  );
}
