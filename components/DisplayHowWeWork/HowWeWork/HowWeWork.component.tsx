import React, { FC, useContext } from "react";
import { Container, Title, Text } from "./HowWeWork.style";
import { DarkmodeContext } from "@/context";

interface Props {
  titleText: string;
  text: string;
}

export const HowWeWork: FC<Props> = ({ titleText, text }) => {
  const { toogleDarkMode } = useContext(DarkmodeContext);
  return (
    <Container
      $bgcolor={toogleDarkMode ? "rgb(243, 243, 244)" : "rgb(31,31,37)"}
    >
      <Title $color={toogleDarkMode ? "black" : "white"}>{titleText}</Title>
      <Text $color={toogleDarkMode ? "black" : "white"}>{text}</Text>
    </Container>
  );
};
