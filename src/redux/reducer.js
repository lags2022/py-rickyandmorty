const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const redFavoritos = (state = initialState, actions) => {
  const ACTIONS = {
    ADDFAVORITES: {
      ...state,
      allCharacters: [...state.allCharacters, actions.payload],
      myFavorites: [...state.allCharacters, actions.payload],
    },
    REMOVEFAVORITES: {
      myFavorites: state.myFavorites.filter(
        (fav) => fav.id !== actions.payload
      ),
      allCharacters: state.allCharacters.filter(
        (fav) => fav.id !== actions.payload
      ),
    },
    FILTER: {
      ...state,
      myFavorites: state.allCharacters.filter(
        (char) => char.gender === actions.payload
      ),
    },
    ORDER: {
      ...state,
      myFavorites:
        actions.payload === "Ascendente"
          ? state.allCharacters.sort((a, b) => a.id - b.id)
          : state.allCharacters.sort((a, b) => b.id - a.id),
    },
  };
  return ACTIONS[actions.type] || { ...state };
};

export default redFavoritos;
