import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation}) {
  //we get the route prop and the navigation prop when we bind a component to a screen
  //route has a params property - check official docs under api tab [params, path,name and key ]
  //the params here is the params we setup in MealsOverScreen
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  },[catId,navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      id: item.id
    };
    

    return <MealItem {...mealItemProps}/>;
  }

//Navigation Section 



  return (
    <View style={styles.container}>
      {/*<Text>Meals Overview - {catId}</Text>*/}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
