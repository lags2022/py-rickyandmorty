import {
  ADDFAVORITES,
  REMOVEFAVORITES,
  FILTER,
  ORDER,
  GETFAVORITES,
  RESETFAVORITES,
} from "./actions";
import axios from "axios";

export const addFavorite = (idfav) => {
  return async function (dispatch) {
    try {
      const add = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        idfav
      );
      console.log(add.data,"post")
      return dispatch({
        type: ADDFAVORITES,
        payload: add.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/rickandmorty/fav"
      );
      return dispatch({
        type: GETFAVORITES,
        payload: data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const dele = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      console.log(dele.data,"delete")
      return dispatch({
        type: REMOVEFAVORITES,
        payload: dele.data.id,
      });
    } catch (error) {
      window.alert(error);
    }
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

export const resetfavorites = () => {
  return async function (dispatch) {
    try {
      const reset=await axios.get(`http://localhost:3001/rickandmorty/fav/reset`);
      return dispatch({
        type: RESETFAVORITES,
        payload: reset.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};
