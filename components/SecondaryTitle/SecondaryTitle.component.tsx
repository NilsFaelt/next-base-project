import React, { FC } from "react";
import { Container, Title } from "./SecondaryTitle.style";
interface Props {
  text: string;
}
export const SecondaryTitle: FC<Props> = ({ text }) => {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};
