import { MEALS } from "../data/dummy-data";
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Button,
  Text,
  Image,
} from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
//import { FavoritesContext } from "../store/context/favorites-context";
import {useSelector,useDispatch} from 'react-redux';
import {addFavorite,removeFavorite} from '../store/redux/favorites';


function MealDetailScreen({ route, navigation }) {
 // const favoriteMealsCtx = useContext(FavoritesContext);
  //to get hold of data in redux store - we use the useSelector - used to get data out of redux store 
  const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);
  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;
  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  //const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      //favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    } else {
     // favoriteMealsCtx.addFavorite(mealId);
     dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        // return <Button title='Tap Me' onPress={headerButtonPressHandler}/>
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  container: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
