import { Course } from "@/definitions/course";
import { Hole } from "@/definitions/hole";

const holes: Hole[] = [
  {
    hole: 1,
    par: 5,
    coords: {
      lat: 42.46089771230666,
      long: -71.25581706750889,
    },
  },
  {
    hole: 2,
    par: 5,
    coords: {
      lat: 42.45719248387844,
      long: -71.25449895434194,
    },
  },
  {
    hole: 3,
    par: 4,
    coords: {
      lat: 42.45727699744487,
      long: -71.25104367242741,
    },
  },
  {
    hole: 4,
    par: 3,
    coords: {
      lat: 42.456110921612456,
      long: -71.2533539706147,
    },
  },
  {
    hole: 5,
    par: 4,
    coords: {
      lat: 42.454505714424215,
      long: -71.25522478494521,
    },
  },
  {
    hole: 6,
    par: 3,
    coords: {
      lat: 42.45598993088235,
      long: -71.25607218810376,
    },
  },
  {
    hole: 7,
    par: 4,
    coords: {
      lat: 42.457501331469956,
      long: -71.25773167977691,
    },
  },
  {
    hole: 8,
    par: 4,
    coords: {
      lat: 42.456742706678305,
      long: -71.255373454831,
    },
  },
  {
    hole: 9,
    par: 3,
    coords: {
      lat: 42.45684268910039,
      long: -71.25409461324901,
    },
  },
];

export const PINE_MEADOWS_GOLF: Course = {
  id: "pine_meadows_golf",
  name: "Pine Meadows Golf Club",
  location: "Lexington, MA",
  holes: holes,
};
