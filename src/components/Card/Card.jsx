import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.name} />
      <div className={styles.card_top}>
        <p>{`#${props.id}`}</p>
        <button onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <div className={styles.card_p}>
        <p>{props.species}</p>
      </div>
      <div className={styles.card_bottom}>
        <Link to={`/detail/${props.id}`}  className={styles.name}>
          <h3>{props.name}</h3>
        </Link>
        <p>{props.gender}</p>
      </div>
    </div>
  );
};

export default Card;
