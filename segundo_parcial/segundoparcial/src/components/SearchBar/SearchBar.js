import React, { useState } from "react";
import { Input, Container, Spacer, Row, Text } from "@nextui-org/react";
import cocktailServices from "../../services/cocktailServices";
import Chip from "../Chip/Chip";

const SearchBar = ({ onSearch, suggestions }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await cocktailServices.searchByName(searchValue);
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
      <Row align="center" css={{ overflow: "hidden" }}>
        <Text css={{ marginRight: "$10" }}>Surgerencias</Text>
        {suggestions?.map(({ drinks }) => (
          <Chip key={drinks[0].idDrink}>{drinks[0].strDrink}</Chip>
        ))}
      </Row>
    </Container>
  );
};

export default SearchBar;
