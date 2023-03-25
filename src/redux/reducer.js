const initialState = {
  myFavorites: [],
  allCharacters: [],
  user: null,
};

const redFavoritos = (state = initialState, actions) => {
  const ACTIONS = {
    ADDFAVORITES: {
      ...state,
      allCharacters: [...state.allCharacters, actions.payload],
      myFavorites: [...state.allCharacters, actions.payload],
    },
    REMOVEFAVORITES: {
      ...state,
      myFavorites: state.myFavorites.filter(
        (fav) => fav.id !== actions.payload
      ),
      allCharacters: state.allCharacters.filter(
        (fav) => fav.id !== actions.payload
      ),
    },
    GETFAVORITES: {
      myFavorites: actions.payload,
      allCharacters: actions.payload,
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
    RESETFAVORITES: {
      ...state,
      myFavorites: actions.payload,
      allCharacters: actions.payload,
    },
    LOGINUSER: {
      ...state,
      user: actions.payload,
    },
    PERSISTENTUSER: {
      ...state,
      user: actions.payload,
    },
  };
  return ACTIONS[actions.type] || { ...state };
};

export default redFavoritos;
