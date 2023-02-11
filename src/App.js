import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

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

  return (
    <div>
      {location.pathname !== "/error404" && (
        <Nav onSearch={onSearch} onClean={onClean} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="error404" element={<Error />} />
        <Route path="*" element={<Navigate to="error404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
