import { PrivateValueStore } from "@react-navigation/native";
import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [], //managing Ids of my favorite meals which is an array
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  //add all logic to manage the context
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    ); //gop through all meal ids in array and if meal Id IS NOT EQUAL TO ID , I WANT TO KEEP IT , ELSE TAKE IT OUT
  }
  const values= {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}


export default FavoritesContextProvider;