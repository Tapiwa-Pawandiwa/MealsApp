import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import MealsOverviewScreen from "./MealsOverviewScreen";

//you get a special navigation prop for components that are bound to a screen or rather screens that are used as screens not to any child components
function CategoriesScreen({ navigation }) {

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview');
      //use name of target page not component name AS A STRING
      //navigate wants the name of the page we want to go to
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
      //Console.log(itemData);
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
//renderItem shows how each data item will be rendered
export default CategoriesScreen;
