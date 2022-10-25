import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

//meals overview screen should appear when we tap a screen
