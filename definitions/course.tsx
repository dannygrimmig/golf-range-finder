import { Hole } from "./hole";

export type Course = {
  id: string;
  name: string;
  location: string;
  holes: Hole[];
};
