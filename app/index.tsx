import * as React from "react";
import { FlatList, View, StyleSheet, TextInput } from "react-native";

import { CourseSearchCard } from "@/components/CourseSearchCard";
import { Course } from "@/definitions/course";
import { getCourses } from "@/api/service";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  // managed
  const [search, setSearch] = React.useState("");
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    const mockFetchData = getCourses();
    setCourses(mockFetchData);
  });

  // derived
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <TextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          style={indexStyles.input}
          placeholder="search courses"
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
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    fontFamily: "OutfitRegular",
  },
});
