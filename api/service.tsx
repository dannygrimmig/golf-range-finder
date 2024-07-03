import { fakeCourses } from "@/constants/sampleCourses";

// Get Courses
export const getCourses = () => {
  return fakeCourses;
};

// GET /courses/id
export const getCourseById = (id: string) => {
  return fakeCourses.find((course) => course.id === id);
};
