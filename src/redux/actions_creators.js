import {
  ADDFAVORITES,
  REMOVEFAVORITES,
  FILTER,
  ORDER,
  GETFAVORITES,
  RESETFAVORITES,
  LEAVEFAVORITES,
} from "./actions";
import axios from "axios";

// vuelve a descomentar esto cuando estes en local , vuelvo a comentarlo para que funcione en flyio
// const url = "http://localhost:3001/rickandmorty/fav";
const url = "https://backrickandmorty.fly.dev/rickandmorty/fav";

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const leaveFavorites = () => {
  return {
    type: LEAVEFAVORITES,
  };
};

export const addFavorite = (idfav) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  return async function (dispatch) {
    try {
      const add = await axios.post(url, idfav, config);
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
  const config = {
    headers: {
      Authorization: token,
    },
  };
  return async function (dispatch) {
    try {
      const { data } = await axios.get(url, config);
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
  const config = {
    headers: {
      Authorization: token,
    },
  };
  return async function (dispatch) {
    try {
      const dele = await axios.delete(`${url}/${id}`, config);
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
  const config = {
    headers: {
      Authorization: token,
    },
  };
  return async function (dispatch) {
    try {
      const reset = await axios.delete(`${url}/reset`, config);
      return dispatch({
        type: RESETFAVORITES,
        payload: reset.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};
