import * as React from "react";
import { FlatList, View, StyleSheet, TextInput } from "react-native";

import { CourseSearchCard } from "@/components/CourseSearchCard";
import { Course } from "@/definitions/course";
import { getCourses } from "@/api/service";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  // managed
  const [search, setSearch] = React.useState<string>("");
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    const mockFetchData = getCourses();
    setCourses(mockFetchData);
  });

  // derived
  const filteredCourses: Course[] = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaProvider style={{ padding: 4, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          style={indexStyles.input}
          placeholder="Search Courses"
        />

        <FlatList
          data={filteredCourses}
          renderItem={({ item }) => <CourseSearchCard course={item} />}
          style={{
            width: "100%",
            paddingHorizontal: 24,
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}

const indexStyles = StyleSheet.create({
  input: {
    width: "95%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    padding: 10,
    fontFamily: "OutfitLight",
  },
});
