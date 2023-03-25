import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavorite,
  resetfavorites,
  persistenuser,
} from "./redux/actions_creators";
import Portafolio from "./components/Portafolio/Portafolio";

// const valiDatos = {
//   email: "luis@gmail.com",
//   password: "admin1234",
// };

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const onSearch = (id) => {
    // vuelve a descomentar esto cuando estes en local , vuelvo a comentarlo para que funcione en flyio
    // fetch(`https://rickandmortyapi.com/api/character/${id}`)
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      // fetch(`https://rickback.fly.dev/rickandmorty/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.error || !data.id
          ? window.alert("No existe ese personaje con ese ID")
          : !characters.find((char) => char.id === parseInt(id))
          ? setCharacters([...characters, data])
          : window.alert("Personaje duplicado");
      })
      .catch((error) => window.alert("parameter invalid"));
  };

  const onClean = () => {
    setCharacters([]);
    dispatch(resetfavorites());
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    dispatch(deleteFavorite(id));
  };
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (user) {
      if (!loggedUserJSON)
        window.localStorage.setItem("loggedUser", JSON.stringify(user));
      navigate("/home");
    } else if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(persistenuser(user));
    } else navigate("/");
  }, [user]);

  const logouted = () => {
    dispatch(persistenuser(null));
    window.localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
    <div>
      {location.pathname !== "/error404" && location.pathname !== "/" && (
        <Nav logouted={logouted} onSearch={onSearch} onClean={onClean} />
      )}
      <Routes>
        <Route path="/" element={<Form />} />
        {/* <Route path="/" element={<Form valiDated={valiDated} />} /> */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="portafolio" element={<Portafolio />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="error404" element={<Error />} />
        <Route path="*" element={<Navigate to="error404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
