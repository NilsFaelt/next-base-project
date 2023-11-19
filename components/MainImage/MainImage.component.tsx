import React, { FC } from "react";
import {
  Container,
  TextContainer,
  Title,
  Text,
  Overlay,
} from "./MainImage.style";

export const MainImage: FC = () => {
  return (
    <Container>
      <Overlay>
        <TextContainer>
          <Title>Expert consulting</Title>
          <Text>
            Competent consultants at the forefront of technology. Reinforcement
            when and where needed.
          </Text>
        </TextContainer>
      </Overlay>
    </Container>
  );
};
