import React from "react";
import Hero from "./Hero";
import HeroContainer from "./HeroContainer";
import { Title, Highlight, Paragraph } from "../Typography";
import Icon from "../Images/Icon";

export default function index() {
  return (
    <Hero>
      <HeroContainer>
        <Title>
          Get paid for the work you <Highlight>love </Highlight>
          to do.
        </Title>
        <Paragraph>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </Paragraph>
        <Icon img="./assets/icon-scroll.svg" />
      </HeroContainer>
    </Hero>
  );
}
