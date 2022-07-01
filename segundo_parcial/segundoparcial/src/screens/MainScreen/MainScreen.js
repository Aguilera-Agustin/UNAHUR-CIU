import { Spacer } from "@nextui-org/react";
import React, { useState } from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import InfoCardsContainer from "../../components/InfoCardsContainer/InfoCardsContainer";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Title from "../../components/Title/Title";

const MainScreen = ({ username, onLogout }) => {
  const [data, setData] = useState();
  const onSearch = (apiData) => {
    setData(apiData);
  };
  console.log(data);
  return (
    <>
      <Navbar username={username} onLogout={onLogout} />
      <Spacer />
      <Title title="Mi Coctelería" />
      <SearchBar onSearch={onSearch} />
      <InfoCardsContainer>
        {data &&
          data?.drinks?.length > 0 &&
          data?.drinks.map((item) => (
            <InfoCard
              key={item.idDrink}
              category={item.strCategory}
              img={item.strDrinkThumb}
              title={item.strDrink}
            />
          ))}
      </InfoCardsContainer>
    </>
  );
};

export default MainScreen;
