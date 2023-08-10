import {
  ADDFAVORITES,
  REMOVEFAVORITES,
  FILTER,
  ORDER,
  GETFAVORITES,
  RESETFAVORITES,
  LEAVEFAVORITES
} from './actions'
import axios from 'axios'

const url = `${process.env.REACT_APP_URL_API}/rickandmorty/fav`

let token = null

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

export const leaveFavorites = () => {
  return {
    type: LEAVEFAVORITES
  }
}

export const addFavorite = (idfav) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  return async function (dispatch) {
    try {
      const add = await axios.post(url, idfav, config)
      return dispatch({
        type: ADDFAVORITES,
        payload: add.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getFavorites = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  return async function (dispatch) {
    try {
      const { data } = await axios.get(url, config)
      return dispatch({
        type: GETFAVORITES,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteFavorite = (id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  return async function (dispatch) {
    try {
      const dele = await axios.delete(`${url}/${id}`, config)
      return dispatch({
        type: REMOVEFAVORITES,
        payload: dele.data.id
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status
  }
}

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id
  }
}

export const resetfavorites = () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  return async function (dispatch) {
    try {
      const reset = await axios.delete(`${url}/reset`, config)
      return dispatch({
        type: RESETFAVORITES,
        payload: reset.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
