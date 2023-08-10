import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, deleteFavorite } from '../../redux/actions_creators.js'
import { useEffect, useState } from 'react'

const Card = (props) => {
  const [isFav, setIsFav] = useState(false)
  const dispatch = useDispatch()
  const { allCharacters } = useSelector((state) => state)
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      dispatch(deleteFavorite(props.id))
    } else {
      setIsFav(true)
      dispatch(addFavorite(props))
    }
  }
  useEffect(() => {
    for (const fav of allCharacters) {
      fav.id === props.id && setIsFav(true)
    }
  }, [allCharacters])
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.name} />
      <div className={styles.card_top}>
        <p>{`#${props.id}`}</p>
        <button onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <div className={styles.card_p}>
        {isFav
          ? (
            <button onClick={handleFavorite}>❤️</button>
            )
          : (
            <button onClick={handleFavorite}>🤍</button>
            )}
        <p>{props.species}</p>
      </div>
      <div className={styles.card_bottom}>
        <Link to={`/detail/${props.id}`} className={styles.name}>
          <h3>{props.name}</h3>
        </Link>
        <p>{props.gender}</p>
      </div>
    </div>
  )
}

export default Card
