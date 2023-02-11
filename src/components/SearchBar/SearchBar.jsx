import { useState } from "react";
import style from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faShuffle,faRotate } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch, onClean }) => {
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={style.searchBar}>
      <p>Character</p>
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
        <FontAwesomeIcon className={style.fawe} icon={faCheck} />
        <span>Add</span>
      </button>
      <button onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}>
        <FontAwesomeIcon className={style.fawe} icon={faShuffle} />
        <span>Random</span>
      </button>
      <button onClick={() => onClean()}>
        <FontAwesomeIcon className={style.fawe} icon={faRotate} />
        <span>Reset</span>
      </button>
    </div>
  );
};

export default SearchBar;
