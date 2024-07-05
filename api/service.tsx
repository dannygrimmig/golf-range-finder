import { fakeCourses } from "@/constants/sampleCourses";
import { Coords } from "@/definitions/hole";
import { CHATHAM_SEASIIDE_LINKS } from "./courses/chatham_seaside_links";
import { Course } from "@/definitions/course";

// Get Courses
export const getCourses = () => {
  return fakeCourses;
};

// GET /courses/id
export const getCourseById = (
  id: string | string[] | undefined
): Course | undefined => {
  let query: string;
  if (typeof id === "string") {
    query = id;
  } else if (Array.isArray(id) && id.length > 0) {
    query = id[0];
  } else {
    return undefined;
  }
  return fakeCourses.find((course) => course.id === query);
};

// Calculate Distance
export function calculateDistanceInYards(
  currentLocation: Coords,
  destinationLocation: Coords
): number {
  const toRadians = (degrees: number) => degrees * (Math.PI / 180);

  const earthRadiusInMiles = 3958.8; // Earth radius in miles
  const milesToYards = 1760; // Conversion factor from miles to yards

  const lat1 = toRadians(currentLocation.lat);
  const long1 = toRadians(currentLocation.long);
  const lat2 = toRadians(destinationLocation.lat);
  const long2 = toRadians(destinationLocation.long);

  const dLat = lat2 - lat1;
  const dLong = long2 - long1;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLong / 2) * Math.sin(dLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distanceInMiles = earthRadiusInMiles * c;
  const distanceInYards = distanceInMiles * milesToYards;

  return distanceInYards;
}

export function roundNumber(number: number) {
  return Math.round(number);
}
