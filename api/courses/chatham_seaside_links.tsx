import { Course } from "@/definitions/course";
import { Hole } from "@/definitions/hole";

const holes: Hole[] = [
  {
    hole: 1,
    par: 4,
    coords: {
      lat: 41.672361,
      long: -69.997972,
    },
  },
  {
    hole: 2,
    par: 4,
    coords: {
      lat: 41.67261,
      long: -69.9972,
    },
  },
  {
    hole: 3,
    par: 3,
    coords: {
      lat: 41.672361,
      long: -69.99972,
    },
  },
  {
    hole: 4,
    par: 3,
    coords: {
      lat: 41.67361,
      long: -69.99792,
    },
  },
  {
    hole: 5,
    par: 4,
    coords: {
      lat: 41.72361,
      long: -69.997972,
    },
  },
  {
    hole: 6,
    par: 4,
    coords: {
      lat: 41.672361,
      long: -69.99972,
    },
  },
  {
    hole: 7,
    par: 4,
    coords: {
      lat: 41.672361,
      long: -69.97972,
    },
  },
  {
    hole: 8,
    par: 4,
    coords: {
      lat: 41.67361,
      long: -69.997972,
    },
  },
  {
    hole: 9,
    par: 4,
    coords: {
      lat: 41.6731,
      long: -69.997972,
    },
  },
];

export const CHATHAM_SEASIIDE_LINKS: Course = {
  id: "0",
  name: "Chatham Seaside Links",
  location: "Chatham, MA",
  holes: holes,
};
