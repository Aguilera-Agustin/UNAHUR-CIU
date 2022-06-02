import React from "react";
import pizzaMenuData from "../../data/pizzaMenuData";
import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";

const PizzaMenu = () => {
  return (
    <section className="mt-12" id='pizzas'>
      <SectionTitle title="Pizzas" />
      <div className="ml-24 mt-12 flex flex-wrap">
        {pizzaMenuData.map((eachPizza) => (
          <Card key={eachPizza.title} {...eachPizza} />
        ))}
      </div>
    </section>
  );
};

export default PizzaMenu;
