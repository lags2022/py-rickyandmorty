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
import { deleteFavorite,resetfavorites } from "./redux/actions_creators";
import Portafolio from "./components/Portafolio/Portafolio";

const valiDatos = {
  username: "luis@gmail.com",
  password: "admin1234",
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const valiDated = (form) => {
    if (
      form.username === valiDatos.username &&
      form.password === valiDatos.password
    ) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Datos incorrectos");
    }
  };
  const onSearch = (id) => {
    // fetch(`https://rickandmortyapi.com/api/character/${id}`)
    // fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    fetch(`https://rickback.fly.dev/rickandmorty/character/${id}`)
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
    dispatch(resetfavorites())
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    dispatch(deleteFavorite(id));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logouted = () => {
    setAccess(false);
  };

  return (
    <div>
      {location.pathname !== "/error404" && location.pathname !== "/" && (
        <Nav logouted={logouted} onSearch={onSearch} onClean={onClean} />
      )}
      <Routes>
        <Route path="/" element={<Form valiDated={valiDated} />} />
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
