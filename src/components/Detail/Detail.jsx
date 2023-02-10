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
  }, []);

  return (
    <div className={style.detail}>
      <div className={style.info}>
        <h2>{detail.name}</h2>
        <h4>{detail.status}</h4>
        <h4>{detail.species}</h4>
        <h4>{detail.gender}</h4>
        <h4>{detail.origin?.name}</h4>
        <p>{detail.name2 ? detail.name2 : ""}</p>
      </div>
      <img src={detail.image} alt={detail.name} />
    </div>
  );
};

export default Detail;
