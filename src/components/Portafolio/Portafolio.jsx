import style from './Portafolio.module.css'

const Portafolio = () => {
  return (
    <>
      <div className={style.miportafolio}>
        <p>Mi Portafolio</p>
      </div>
      <ul className={style.portafolio}>
        <li>
          <p>Ricky and Morty</p>
          <img src='https://i.imgur.com/RsBl1SB.png' alt='portafolio1' />
          <a href='https://rickyandmortyfront.netlify.app/'>🔗
            Aplicacion web Ricky and Morty
          </a>
        </li>
      </ul>
    </>
  )
}

export default Portafolio
