import { Course } from "@/definitions/course";
import { Hole } from "@/definitions/hole";

const holes: Hole[] = [
  {
    hole: 1,
    par: 4,
    coords: {
      lat: 42.503784261520174,
      long: -71.26637489566174,
    },
  },
  {
    hole: 2,
    par: 4,
    coords: {
      lat: 42.501089922469795,
      long: -71.26556590086392,
    },
  },
  {
    hole: 3,
    par: 3,
    coords: {
      lat: 42.50246658124714,
      long: -71.26634667490683,
    },
  },
  {
    hole: 4,
    par: 4,
    coords: {
      lat: 42.503333479291754,
      long: -71.26930044654014,
    },
  },
  {
    hole: 5,
    par: 3,
    coords: {
      lat: 42.5026226237872,
      long: -71.2679411471925,
    },
  },
  {
    hole: 6,
    par: 5,
    coords: {
      lat: 42.499567586893114,
      long: -71.26832212727261,
    },
  },
  {
    hole: 7,
    par: 4,
    coords: {
      lat: 42.50204058079987,
      long: -71.26875725126926,
    },
  },
  {
    hole: 8,
    par: 4,
    coords: {
      lat: 42.49945062582863,
      long: -71.26968086127846,
    },
  },
  {
    hole: 9,
    par: 4,
    coords: {
      lat: 42.502358331234326,
      long: -71.2702518592191,
    },
  },
];

export const PATRIOT_GOLF_COURSE: Course = {
  id: "patriot_golf_course",
  name: "Patriot Golf Course",
  location: "Bedford, MA",
  holes: holes,
};
