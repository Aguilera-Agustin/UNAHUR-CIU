import React, { useState } from "react";
import { Input, Container, Spacer, Text, Grid } from "@nextui-org/react";
import cocktailServices from "../../services/cocktailServices";
import Chip from "../Chip/Chip";

const SearchBar = ({ onSearch, suggestions }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await cocktailServices.searchByName(searchValue);
    onSearch(data);
  };
  const onChipPress = async (title) => {
    setSearchValue(title);
    const data = await cocktailServices.searchByName(title);
    onSearch(data);
  };
  return (
    <Container sm>
      <Spacer y={3} />
      <form onSubmit={onSubmit}>
        <Input
          size="xl"
          width="100%"
          placeholder="Busca un trago (en inglés)"
          bordered
          color="secondary"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <Spacer />
      <Grid.Container>
        <Grid md={2} xs={12}>
          <Text css={{ marginRight: "$10" }}>Surgerencias</Text>
        </Grid>
        <Grid md={10} xs={12}>
          {suggestions?.map(({ drinks }) => (
            <Chip
              key={drinks[0].idDrink}
              onPress={() => onChipPress(drinks[0].strDrink)}
            >
              {drinks[0].strDrink}
            </Chip>
          ))}
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default SearchBar;
