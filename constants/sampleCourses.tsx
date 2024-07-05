import { Course } from "@/definitions/course";
import { sampleHoles } from "./sampleHoles";
import { CHATHAM_SEASIIDE_LINKS } from "@/api/courses/chatham_seaside_links";

export const fakeCourses: Course[] = [
  CHATHAM_SEASIIDE_LINKS,
  {
    id: "1",
    name: "Pebble Beach",
    location: "Monteray, CA",
    holes: sampleHoles,
  },
  {
    id: "2",
    name: "Augusta National",
    location: "Augusta, GA",
    holes: sampleHoles,
  },
  {
    id: "3",
    name: "Baltusrol Golf Club",
    location: "Springfield, NJ",
    holes: sampleHoles,
  },
  {
    id: "4",
    name: "Bethpage Black",
    location: "Bethpage, NY",
    holes: sampleHoles,
  },
  {
    id: "5",
    name: "Pine Valley",
    location: "Pine Valley, NJ",
    holes: sampleHoles,
  },
  {
    id: "6",
    name: "Shinnecock Hills",
    location: "Southampton, NY",
    holes: sampleHoles,
  },
  { id: "7", name: "Oakmont", location: "Oakmont, PA", holes: sampleHoles },
  {
    id: "8",
    name: "Merion (East)",
    location: "Admore, PA",
    holes: sampleHoles,
  },
];
