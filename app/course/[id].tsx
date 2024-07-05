import * as React from "react";
import * as Location from "expo-location";

import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import {
  calculateDistanceInYards,
  Coords,
  getCourseById,
  roundNumber,
} from "@/api/service";
import { CourseHeader } from "@/components/CourseHeader";
import { Distances } from "@/components/Distances";
import { HoleDetails } from "@/components/HoleDetails";
import { sampleHoles } from "@/constants/sampleHoles";

export default function Page() {
  // imported
  const { id } = useLocalSearchParams();

  // managed
  const [currentHoleIndex, setCurrentHoleIndex] = React.useState<number>(0);
  const [location, setLocation] = React.useState<Location.LocationObject>();
  const [locationSubscription, setLocationSubscription] =
    React.useState<Location.LocationSubscription | null>(null);

  // derived
  const course = getCourseById(id);

  const currentLocation: Coords = {
    lat: location?.coords.latitude || 0,
    long: location?.coords.longitude || 0,
  };
  const middleLocation: Coords = {
    lat: sampleHoles[currentHoleIndex].coords.lat,
    long: sampleHoles[currentHoleIndex].coords.long,
  };

  const distance: number = roundNumber(
    calculateDistanceInYards(currentLocation, middleLocation)
  );

  React.useEffect(() => {
    const startWatching = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 5000, // Update every 5 seconds
          distanceInterval: 1, // Update every 10 meters
        },
        (newLocation) => {
          setLocation(newLocation);
        }
      );
      setLocationSubscription(subscription);
    };

    startWatching();

    // Cleanup subscription on component unmount
    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, [locationSubscription]);

  const onHoleChange = (direction: "up" | "down") => {
    if (direction === "up") {
      currentHoleIndex + 1 === sampleHoles.length
        ? setCurrentHoleIndex(0)
        : setCurrentHoleIndex(currentHoleIndex + 1);
    } else {
      currentHoleIndex - 1 < 0
        ? setCurrentHoleIndex(sampleHoles.length - 1)
        : setCurrentHoleIndex(currentHoleIndex - 1);
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

      <Distances front={distance - 10} middle={distance} back={distance + 10} />

      <HoleDetails
        hole={sampleHoles[currentHoleIndex].hole}
        par={sampleHoles[currentHoleIndex].par}
        onHoleChange={onHoleChange}
      />
    </View>
  );
}
