import React, { useState } from "react";
import {
  Input,
  Container,
  Spacer,
  Text,
  Grid,
  Loading,
} from "@nextui-org/react";
import Chip from "../Chip/Chip";

const SearchBar = ({ onSearch, suggestions }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };
  const onChipPress = async (title) => {
    setSearchValue(title);
    onSearch(title);
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
          {suggestions?.length === 0 && <Loading />}
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
