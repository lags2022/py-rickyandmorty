import { ADDFAVORITES,REMOVEFAVORITES } from "./actions";

export const addFavorite = (idfav) => {
  return {
    type: ADDFAVORITES,
    payload: idfav,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: REMOVEFAVORITES,
    payload: id,
  };
};
