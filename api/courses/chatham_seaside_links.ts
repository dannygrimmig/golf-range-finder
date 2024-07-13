import { Course } from "@/definitions/course";
import { Hole } from "@/definitions/hole";

const holes: Hole[] = [
  {
    hole: 1,
    par: 4,
    coords: {
      lat: 41.6876599872954,
      long: -69.9536667308473,
    },
  },
  {
    hole: 2,
    par: 4,
    coords: {
      lat: 41.68583874250498,
      long: -69.954944143149,
    },
  },
  {
    hole: 3,
    par: 3,
    coords: {
      lat: 41.68725741853794,
      long: -69.95524421502046,
    },
  },
  {
    hole: 4,
    par: 3,
    coords: {
      lat: 41.68640933356401,
      long: -69.95711624357212,
    },
  },
  {
    hole: 5,
    par: 4,
    coords: {
      lat: 41.68501192554299,
      long: -69.95420067742354,
    },
  },
  {
    hole: 6,
    par: 4,
    coords: {
      lat: 41.68257992987262,
      long: -69.95301124242388,
    },
  },
  {
    hole: 7,
    par: 4,
    coords: {
      lat: 41.68106327134005,
      long: -69.95613713551833,
    },
  },
  {
    hole: 8,
    par: 4,
    coords: {
      lat: 41.68241201584,
      long: -69.95473737366987,
    },
  },
  {
    hole: 9,
    par: 4,
    coords: {
      lat: 41.6840640539349,
      long: -69.95515077484738,
    },
  },
  {
    hole: 10,
    par: 4,
    coords: {
      lat: 41.6876599872954,
      long: -69.9536667308473,
    },
  },
  {
    hole: 11,
    par: 4,
    coords: {
      lat: 41.68583874250498,
      long: -69.954944143149,
    },
  },
  {
    hole: 12,
    par: 3,
    coords: {
      lat: 41.68725741853794,
      long: -69.95524421502046,
    },
  },
  {
    hole: 13,
    par: 3,
    coords: {
      lat: 41.68640933356401,
      long: -69.95711624357212,
    },
  },
  {
    hole: 14,
    par: 4,
    coords: {
      lat: 41.68501192554299,
      long: -69.95420067742354,
    },
  },
  {
    hole: 15,
    par: 4,
    coords: {
      lat: 41.68257992987262,
      long: -69.95301124242388,
    },
  },
];

export const CHATHAM_SEASIIDE_LINKS: Course = {
  id: "chatham_seaside_link",
  name: "Chatham Seaside Links",
  location: "Chatham, MA",
  holes: holes,
};
