import React, { FC } from "react";
import { Container } from "./PrimaryButton.style";
interface Props {
  text: string;
}
export const PrimaryButton: FC<Props> = ({ text }) => {
  return <Container>{text}</Container>;
};
