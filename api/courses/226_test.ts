import { Course } from "@/definitions/course";
import { Hole } from "@/definitions/hole";

const holes: Hole[] = [
  {
    hole: 1,
    par: 3,
    coords: {
      lat: 41.67264293512521,
      long: -69.99759429065901,
    },
  },
  {
    hole: 2,
    par: 4,
    coords: {
      lat: 41.670246714863765,
      long: -69.99888175096511,
    },
  },
  {
    hole: 3,
    par: 3,
    coords: {
      lat: 41.670687497857465,
      long: -70.00259392810933,
    },
  },
  {
    hole: 4,
    par: 3,
    coords: {
      lat: 41.66965365661919,
      long: -69.99898903932188,
    },
  },
  {
    hole: 5,
    par: 3,
    coords: {
      lat: 41.6731164164869,
      long: -69.99584535606752,
    },
  },
];

export const TEST_226: Course = {
  id: "test_226",
  name: "Test Course at 226",
  location: "Chatham, MA",
  holes: holes,
};
