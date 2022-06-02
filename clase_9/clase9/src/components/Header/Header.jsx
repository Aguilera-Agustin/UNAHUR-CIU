import React from "react";
import HeaderItem from "../HeaderItem/HeaderItem";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

const Header = () => {
  return (
    <header className="flex justify-between px-20 h-16 items-center fixed w-full bg-white">
      <HeaderLogo />
      <div className="flex justify-between basis-1/3">
        <HeaderItem title="Inicio" href="#home" />
        <HeaderItem title="Pizzas" href="#pizzas" />
        <HeaderItem title="Bebidas" href="#drinks" />
      </div>
    </header>
  );
};

export default Header;
