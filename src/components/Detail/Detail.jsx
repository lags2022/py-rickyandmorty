import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const getDetail = async () => {
      try {
        const character = await axios(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setDetail(character.data);

        const episoded = await axios(
          `${
            character.data.episode.length
              ? character.data.episode.at(0)
              : new Error("")
          }`
        );
        setDetail({ ...character.data, name2: episoded.data.name });
      } catch (error) {
        window.alert("no hay informacion");
      }
    };
    getDetail();
    return () => setDetail({});
  }, [id]);

  return (
    <div className={style.detail}>
      <div className={style.container}>
        <div className={style.info}>
          <h2>{detail.name}</h2>
          <h4>Status: {detail.status}</h4>
          <h4>Specie: {detail.species}</h4>
          <h4>Genero: {detail.gender}</h4>
          <h4>Origen: {detail.origin?.name}</h4>
          <p>Episodio: {detail.name2 ? detail.name2 : ""}</p>
        </div>
        <img src={detail.image} alt={detail.name} />
      </div>
    </div>
  );
};

export default Detail;
