import { ADDFAVORITES,REMOVEFAVORITES,FILTER,ORDER } from "./actions";

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

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};