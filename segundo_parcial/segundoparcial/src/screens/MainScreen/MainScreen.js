import React, { useState } from "react";
import { Grid, Loading, Spacer } from "@nextui-org/react";
import InfoCard from "../../components/InfoCard/InfoCard";
import InfoCardsContainer from "../../components/InfoCardsContainer/InfoCardsContainer";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Title from "../../components/Title/Title";
import { useRandomData } from "../../hooks/useRandomData";
import HelperMessage from "../../components/HelperMessage/HelperMessage";
import cocktailServices from "../../services/cocktailServices";

const LoadingComponent = () => {
  return (
    <Grid.Container>
      <Grid justify="center" xs={12}>
        <Loading />
      </Grid>
    </Grid.Container>
  );
};

const MainScreen = ({ username, onLogout }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { data: cocktailRandom } = useRandomData();
  const onSearch = async (searchValue) => {
    setLoading(true);
    const data = await cocktailServices.searchByName(searchValue);
    setData(data);
    setLoading(false);
  };

  const empty = !data;
  const notResults = !empty && !data?.drinks;
  return (
    <>
      <Navbar username={username} onLogout={onLogout} />
      <Spacer />
      <Title title="Mi Coctelería" />

      <SearchBar onSearch={onSearch} suggestions={cocktailRandom} />
      <InfoCardsContainer>
        {!empty &&
          !notResults &&
          data?.drinks.map((item) => (
            <InfoCard
              key={item.idDrink}
              category={item.strCategory}
              img={item.strDrinkThumb}
              title={item.strDrink}
            />
          ))}
        {loading && <LoadingComponent />}
        {!loading && empty && (
          <HelperMessage
            icon={"🔎"}
            top="Todavía no buscaste ningún cocktail"
            bottom="¡ Probá buscando uno !"
          />
        )}
        {!loading && notResults && (
          <HelperMessage
            icon={"😭"}
            top="Lo sentimos"
            bottom="No encontramos ningún cocktail con ese nombre"
          />
        )}
      </InfoCardsContainer>
    </>
  );
};

export default MainScreen;
