import {
  ADDFAVORITES,
  REMOVEFAVORITES,
  FILTER,
  ORDER,
  GETFAVORITES,
  RESETFAVORITES,
} from "./actions";
import axios from "axios";

// const url = "http://localhost:3001/rickandmorty/fav";
const url = "https://rickback.fly.dev//rickandmorty/fav";

export const addFavorite = (idfav) => {
  return async function (dispatch) {
    try {
      const add = await axios.post(url, idfav);
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
      const { data } = await axios.get(url);
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
      const dele = await axios.delete(
        `${url}/${id}`
      );
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
      const reset = await axios.delete(
        `${url}/reset`
      );
      return dispatch({
        type: RESETFAVORITES,
        payload: reset.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};
