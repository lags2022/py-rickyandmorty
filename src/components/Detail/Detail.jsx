import style from './Detail.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import axios from 'axios'

const Detail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/rickandmorty/detail/${id}`)
      .then(res => res.json())
      .then(data => setDetail(data))
      .catch(error => console.log(error.message))

    return () => setDetail({})
  }, [id])

  // useEffect(() => {
  //   const getDetail = async () => {
  //     try {
  //       const { data } = await axios.get(`${process.env.REACT_APP_URL_API}/rickandmorty/detail/${id}`)
  //       setDetail(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getDetail()
  //   return () => setDetail({})
  // }, [id])

  return (
    <div className={style.detail}>
      <div className={style.container}>
        <div className={style.info}>
          <h2>{detail.name}</h2>
          <h4>Status: {detail.status}</h4>
          <h4>Specie: {detail.species}</h4>
          <h4>Genero: {detail.gender}</h4>
          <h4>Origen: {detail.origin}</h4>
          <p>Episodio: {detail.episode}</p>
        </div>
        <img src={detail.image} alt={detail.name} />
      </div>
      <button className={style.detail_button} onClick={() => navigate('/home')}>
        Home
      </button>
    </div>
  )
}

export default Detail
