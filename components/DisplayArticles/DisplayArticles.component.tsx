import React, { FC, ReactNode, useContext } from "react";
import { Container } from "./DisplayArticles.style";
import { DarkmodeContext } from "@/context";

interface Props {
  children: ReactNode;
}
export const DisplayArticles: FC<Props> = ({ children }) => {
  const { toogleDarkMode } = useContext(DarkmodeContext);
  return (
    <Container
      $bgcolor={toogleDarkMode ? "  rgba(245,245,245,255)" : "rgb(31,31,37)"}
    >
      {children}
    </Container>
  );
};
