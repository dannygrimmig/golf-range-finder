import * as React from "react";
import * as Location from "expo-location";

export function useLocation() {
  const [location, setLocation] = React.useState<Location.LocationObject>();
  const [locationSubscription, setLocationSubscription] =
    React.useState<Location.LocationSubscription | null>(null);

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
          distanceInterval: 1, // Update every 1 meters
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

  return { location };
}
