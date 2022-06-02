import React from 'react'
import drinkMenuData from '../../data/drinkMenuData'
import PizzaCard from '../Card/Card'
import SectionTitle from '../SectionTitle/SectionTitle'

const DrinkMenu = () => {
  return (
    <section className="mt-12" id='drinks'>
    <SectionTitle title="Bebidas" />
    <div className="ml-24 mt-12 flex flex-wrap">
      {drinkMenuData.map((eachDrink) => (
        <PizzaCard key={eachDrink.title} {...eachDrink} />
      ))}
    </div>
  </section>
  )
}

export default DrinkMenu