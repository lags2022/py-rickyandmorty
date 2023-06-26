import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faShuffle,
  faRotate,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { searchString } from "../../services/search";

const SearchBar = ({ onSearch, onClean }) => {
  const [id, setId] = useState("");
  // const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // //autocompletado
  // const searchRef = useRef();
  // const getValue = () => searchRef.current?.value;

  const handleChange = (e) => {
    setId(e.target.value);
  };

  // //autocompletado
  // const handleChange = () => {
  //   const string = getValue();
  //   if (!string) return;
  //   const searchs = searchString(string);
  //   setResults(searchs);
  // };

  return (
    <div className={style.searchBar}>
      <p>Character</p>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Id.."
        value={id}
        // ref={searchRef}
      />
      {/* <div style={{ position: "fixed", top: "60px" }}>
        {Boolean(results.length) && (
          <div>
            <ul>
              <li> {results.length} resultados</li>
              {results
                .map((result) => {
                  return (
                    <li key={result.id}>
                      <button onClick={() => onSearch(result.id)}>
                        <img src={result.image} width="50" />
                        {result.name}
                      </button>
                    </li>
                  );
                })
                .slice(0, 10)}
            </ul>
          </div>
        )}
      </div> */}

      {/* revisar */}

      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        <FontAwesomeIcon className={style.fawe} icon={faCheck} />
        <span>Add</span>
      </button>

      {/* revisar */}

      <button onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}>
        <FontAwesomeIcon className={style.fawe} icon={faShuffle} />
        <span>Random</span>
      </button>
      <button onClick={() => onClean()}>
        <FontAwesomeIcon className={style.fawe} icon={faRotate} />
        <span>Reset</span>
      </button>
      <button onClick={() => navigate("/error404")}>
        <FontAwesomeIcon className={style.fawe} icon={faCircleExclamation} />
        <span>404</span>
      </button>
    </div>
  );
};

export default SearchBar;
