import { useEffect } from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h3>About me</h3>
        <p>
          Permítanme presentarme, mi nombre es Luis Ángel y soy originario de
          Perú. Me gustaría compartir con ustedes mi gran pasión por la
          programación. Recientemente, he estado trabajando en un proyecto muy
          emocionante: una aplicación web que utiliza la API de "Rick and Morty"
          para presentar a sus personajes de una manera accesible y atractiva.
          Espero que esta aplicación sea de su agrado y si tienen alguna
          sugerencia o comentario, estaré encantado de recibirlos a través de
          mis redes sociales. Además, he creado un formulario de contacto para
          facilitar su comunicación conmigo y así poder seguir mejorando y
          optimizando la aplicación.
        </p>
      </div>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/675/1012/53/3d-abstract-animal-dog-wallpaper-preview.jpg"
        alt="img-borrar"
      />
    </div>
  );
};

export default About;
