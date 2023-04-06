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
import { useDispatch } from "react-redux";
import {
  deleteFavorite,
  resetfavorites,
  setToken,
} from "./redux/actions_creators";
import Portafolio from "./components/Portafolio/Portafolio";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const onSearch = (id) => {
    // vuelve a descomentar esto cuando estes en local , vuelvo a comentarlo para que funcione en flyio
    // fetch(`https://rickandmortyapi.com/api/character/${id}`)
    // fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    fetch(`https://backrickandmorty.fly.dev/rickandmorty/character/${id}`)
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
    if (loggedUserJSON) {
      const userpersistent = JSON.parse(loggedUserJSON);
      setUser(userpersistent);
      setToken(userpersistent.token);
    } else navigate("/");
  }, []);

  const logouted = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
    <div>
      {location.pathname !== "/error404" && location.pathname !== "/" && (
        <Nav logouted={logouted} onSearch={onSearch} onClean={onClean} />
      )}
      <Routes>
        <Route path="/" element={<Form setUser={setUser} />} />
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
