import React from "react";
import NavbarContainer from "../NavbarContainer/NavbarContainer";
import NavbarContent from "../NavbarContent/NavbarContent";

const Navbar = ({ username, onLogout }) => {
  return (
    <NavbarContainer>
      <NavbarContent username={username} onLogout={onLogout} />
    </NavbarContainer>
  );
};

export default Navbar;
