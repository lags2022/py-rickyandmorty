import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  orderCards,
  filterCards,
  getFavorites,
} from "../../redux/actions_creators";
import { useEffect } from "react";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  return (
    <>
      <div className={style.select}>
        <p>Order by:</p>
        <select
          name="select1"
          onChange={(evt) => dispatch(orderCards(evt.target.value))}
        >
          <option value="Ascendente" selected>
            Ascendent
          </option>
          <option value="Descendente">Descendent</option>
        </select>
        <p>Filter by:</p>
        <select
          name="select2"
          onChange={(evt) => dispatch(filterCards(evt.target.value))}
        >
          <option value="Genderless">Genderless</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <ul className={style.favorites}>
        {myFavorites.map((fav) => (
          <li key={fav.id}>
            <div>
              <p>{fav.id}</p>
              <p>{fav.name}</p>
            </div>
            <img src={fav.image} alt={fav.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
