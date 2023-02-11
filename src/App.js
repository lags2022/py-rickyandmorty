import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const locationError =
    !["/", "/home", "/about"].includes(location.pathname) &&
    !(location.pathname.substring(0, 8) === "/detail/");

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.error || !data.id
          ? window.alert("No existe ese personaje con ese ID")
          : !characters.find((char) => char.id === parseInt(id))
          ? setCharacters([...characters, data])
          : window.alert("Personaje duplicado");
      });
  };

  const onClean = () => {
    setCharacters([]);
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    locationError && navigate("/error");
  }, [locationError, navigate, location.pathname]);

  return (
    <div className={locationError && "no-background"}>
      <Nav onSearch={onSearch} onClean={onClean} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
