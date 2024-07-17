import * as React from "react";

import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import {
  calculateDistanceInYards,
  getCourseById,
  roundNumber,
} from "@/api/service";
import { CourseHeader } from "@/components/Course/CourseHeader";
import { Distances } from "@/components/Course/Distances";
import { HoleDetails } from "@/components/Course/HoleDetails";
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
        <Text>Error Page</Text>
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

  const holesPerRow = 9;
  const numRows = Math.ceil(holes.length / holesPerRow);

  return (
    <SafeAreaProvider>
      <Stack.Screen
        options={{
          headerTitle: () => <AppHeaderTitle title={course.name} />,
          headerBackTitleVisible: false,
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

        <View>
          {Array.from({ length: numRows }).map((_, rowIndex) => {
            const start = rowIndex * holesPerRow;
            const end = start + holesPerRow;

            return (
              <HoleRow
                key={rowIndex}
                holes={holes.slice(start, end)}
                selectedHole={currentHoleIndex + 1}
                onHoleSelect={(number) => setCurrentHoleIndex(number - 1)}
              />
            );
          })}
        </View>

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

function HoleRow(props: {
  holes: Hole[];
  selectedHole: number;
  onHoleSelect: (number: number) => void;
}) {
  return (
    <View style={{ marginTop: 8 }}>
      <FlatList
        data={props.holes}
        renderItem={({ item }) => (
          <HoleSelection
            hole={item}
            onClick={(number) => {
              props.onHoleSelect(number);
            }}
            selected={props.selectedHole === item.hole}
          />
        )}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          gap: 8,
          marginBottom: 4,
        }}
        horizontal={true}
      />
    </View>
  );
}

function HoleSelection(props: {
  hole: Hole;
  onClick: (number: number) => void;
  selected: boolean;
}) {
  return (
    <Pressable onPress={() => props.onClick(props.hole.hole)}>
      <Text
        style={{
          backgroundColor: props.selected ? "darkgray" : "lightgray",
          fontFamily: "OutfitRegular",
          textAlign: "center",
          padding: 8,
          height: 30,
          width: 30,
          borderColor: "black",
          borderWidth: 0.5,
        }}
      >
        {props.hole.hole}
      </Text>
    </Pressable>
  );
}
