import { Input, Container, Spacer } from "@nextui-org/react";
import React, { useState } from "react";
import cocktailServices from "../../services/cocktailServices";

const SearchBar = ({ onSearch }) => {
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
    </Container>
  );
};

export default SearchBar;
