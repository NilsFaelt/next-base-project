import React, { FC, ReactNode, useContext } from "react";
import {
  Container,
  OuterContainer,
  TitleWrapper,
} from "./DisplayHowWeWork.style";
import { SecondaryTitle } from "..";
import { DarkmodeContext } from "@/context";
interface Props {
  children: ReactNode;
}
export const DisplayHowWeWork: FC<Props> = ({ children }) => {
  const { toogleDarkMode, setToogleDarkMode } = useContext(DarkmodeContext);
  return (
    <OuterContainer
      $bgcolor={
        toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(35,41,49,255)"
      }
    >
      <TitleWrapper>
        <SecondaryTitle text='How We Work' />
      </TitleWrapper>
      <Container>{children}</Container>
    </OuterContainer>
  );
};
