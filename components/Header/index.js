import React from "react";
import HeaderContainer from "./HeaderContainer";
import Logo from "./Logo";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo img="./assets/logo.svg" />
    </HeaderContainer>
  );
}
