import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onClean }) => {
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={style.searchBar}>
      <p>Personaje</p>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="#id"
        value={id}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
      <button onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}>
        Random
      </button>
      <button onClick={() => onClean()}>Limpiar</button>
    </div>
  );
};

export default SearchBar;
