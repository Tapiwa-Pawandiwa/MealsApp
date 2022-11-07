import { View,StyleSheet,FlatList} from 'react-native';
import MealItem from './MealItem';

//render list of meals
function MealsList({items}) {
  
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
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
  
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });