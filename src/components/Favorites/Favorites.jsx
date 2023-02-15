import style from "./Favorites.module.css";
import { useSelector } from "react-redux";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  return (
    <ul className={style.favorites} >
      {myFavorites.map((fav) => (
        <li key={fav.id}>
          <p>{fav.name}</p>
          <img src={fav.image} alt={fav.name} />
        </li>
      ))}
    </ul>
  );
}
