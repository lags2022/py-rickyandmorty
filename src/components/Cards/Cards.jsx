import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css'

class Cards extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const { characters } = this.props
    return (
      <div className={style.cards}>
        {characters.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            {...this.props}
          />
        ))}
      </div>
    )
  }
}

export default Cards
