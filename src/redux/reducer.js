const initialState = {
  myFavorites: [],
};

const redFavoritos = (state = initialState, actions) => {
  const ACTIONS = {
    ADDFAVORITES: {
      myFavorites: [...state.myFavorites, actions.payload],
    },
    REMOVEFAVORITES: {
      myFavorites: state.myFavorites.filter((fav)=>fav.id!==actions.payload)
    },
  };
  return ACTIONS[actions.type] || { ...state };
};

export default redFavoritos;
