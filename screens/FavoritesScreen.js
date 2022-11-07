import { StyleSheet , View,Text} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
//import { useContext } from "react";
import {useSelector} from 'react-redux';

function FavoritesScreen() {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds=useSelector(state=>state.favoriteMeals.ids);


  const favoriteMeals = MEALS.filter((meal) =>
   // favoriteMealsCtx.ids.includes(meal.id)
   favoriteMealIds.includes(meal.id)
  );
  //if the Id of the meal is included in our favorite meal Ids we return true and therefore the item will be kept
  // filter will return an array with all the meals that have an entry in our IDs array in our context

  if(favoriteMeals.length ===0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;


const styles= StyleSheet.create({
  rootContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 18,
    fontWeight:'bold',
    color: 'white',
  }
})