import * as React from "react";

import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  StyleSheet,
  Alert,
} from "react-native";

export default function Index() {
  const [search, setSearch] = React.useState("");
  const [filteredCourses, setFilteredCourses] =
    React.useState<Course[]>(fakeCourses);

  const updateSearch = (text: string) => {
    setSearch(text);
    const filtered = fakeCourses.filter((course) =>
      course.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={filteredCourses}
        renderItem={({ item }) => <Course course={item} />}
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 24,
        }}
      />
    </View>
  );
}

type Course = {
  id: string;
  name: string;
  location: string;
};

function Course(props: { course: Course }) {
  const { course } = props;

  const onCoursePress = (course: Course) => {
    Alert.alert(course.name, course.location);
  };

  return (
    <TouchableOpacity
      style={styles.course_card}
      onPress={() => onCoursePress(course)}
    >
      <Text style={styles.course_name}>{course.name}</Text>
      <Text style={styles.course_city}>{course.location}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  course_card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    marginVertical: 4,
    borderColor: "black",
    borderBottomWidth: 0.5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
  },
  course_name: {
    fontSize: 16,
    fontFamily: "OutfitRegular",
  },
  course_city: {
    fontFamily: "OutfitLight",
  },
});

const fakeCourses: Course[] = [
  { id: "1", name: "Pebble Beach", location: "Monteray, CA" },
  { id: "2", name: "Augusta National", location: "Augusta, GA" },
  { id: "3", name: "Baltusrol Golf Club", location: "Springfield, NJ" },
  { id: "4", name: "Bethpage Black", location: "Bethpage, NY" },
  { id: "5", name: "Pine Valley", location: "Pine Valley, NJ" },
  { id: "6", name: "Shinnecock Hills", location: "Southampton, NY" },
  { id: "7", name: "Oakmont", location: "Oakmont, PA" },
  { id: "8", name: "Merion (East)", location: "Admore, PA" },
];
