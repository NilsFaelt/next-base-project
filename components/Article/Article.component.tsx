import React, { FC, useContext } from "react";
import {
  Container,
  StyledImage,
  Text,
  TextContainer,
  Title,
} from "./Article.style";
import { DarkmodeContext } from "@/context";

interface Props {
  imageSrc: string;
  titleText: string;
  text: string;
  imageAlt?: string;
}

export const Article: FC<Props> = ({ imageSrc, titleText, text, imageAlt }) => {
  const { toogleDarkMode, setToogleDarkMode } = useContext(DarkmodeContext);
  return (
    <Container
      $bgcolor={
        toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(35,41,49,255)"
      }
    >
      <StyledImage alt='face' width={100} height={300} src={imageSrc} />
      <TextContainer>
        <Title $color={toogleDarkMode ? "black" : "white"}>{titleText}</Title>
        <Text $color={toogleDarkMode ? "black" : "white"}>{text}</Text>
      </TextContainer>
    </Container>
  );
};
