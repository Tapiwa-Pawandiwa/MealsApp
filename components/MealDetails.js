import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability,style,textStyle }) {
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem,textStyle]}>{toTitleCase(complexity)}</Text>
      <Text style={[styles.detailItem,textStyle]}>{toTitleCase(affordability)}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
});

