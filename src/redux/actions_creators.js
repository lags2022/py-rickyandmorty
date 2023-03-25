import {
  ADDFAVORITES,
  REMOVEFAVORITES,
  FILTER,
  ORDER,
  GETFAVORITES,
  RESETFAVORITES,
  LOGINUSER,
  PERSISTENTUSER,
} from "./actions";
import axios from "axios";

// vuelve a descomentar esto cuando estes en local , vuelvo a comentarlo para que funcione en flyio
const url = "http://localhost:3001/rickandmorty/fav";
// const url = "https://rickback.fly.dev/rickandmorty/fav";
const userUrl = "http://localhost:3001/ramusers/users";

// const loggedUserJSON = window.localStorage.getItem("loggedUser");

// let { token } = JSON.parse(loggedUserJSON);

// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

export const persistenuser = (args) => {
  return {
    type: PERSISTENTUSER,
    payload: args,
  };
};

export const createUser = (user) => {
  return async function () {
    try {
      await axios.post(userUrl, user);
    } catch (error) {
      window.alert(error);
    }
  };
};

export const loginUser = (credentials) => {
  return async function (dispatch) {
    try {
      const add = await axios.post(`${userUrl}/login`, credentials);
      return dispatch({
        type: LOGINUSER,
        payload: add.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};

export const addFavorite = (idfav) => {
  return async function (dispatch) {
    try {
      console.log(config);
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
  return async function (dispatch) {
    try {
      console.log(config);
      const { data } = await axios.get(`${url}`, config);
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
