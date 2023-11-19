import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface LinksContainerProps {
  $menuanimationstate: "open" | "close" | "stale";
  $bgcolor: string;
}

const openMenuAnimation = keyframes`
  from {
    height: 0vh;
    overflow:hidden;
  }
  to {
    height:calc(100vh ) ;
  }
`;
const closeMenuAnimation = keyframes`
  from {
    height:calc(100vh - 5rem)
  }
  to {
    height: 0vh;
    overflow:hidden;
  }
`;
const staleMenuAnimation = keyframes`
from{ height: 0vh;
    overflow:hidden;
}
  to {
    height: 0vh;
    overflow:hidden;
  }
`;

export const Container = styled.header<{ $bgcolor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  height: 6rem;
  background-color: ${(props) => props.$bgcolor};
  padding-left: 3vw;
  padding-right: 3vw;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
export const DarktModeLanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 4.5rem;
  align-items: center;
  @media (max-width: 868px) {
    align-items: center;
    height: 1.6rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
    position: absolute;
    border-radius: 1rem;
    right: 0.3rem;
    top: 4.7rem;
    color: white;
  }
`;

export const LinksContainer = styled.nav<LinksContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  background-color: ${(props) => props.$bgcolor};
  padding-top: 1rem;
  @media (max-width: 768px) {
    width: 100vw;
    position: absolute;
    padding-top: 0rem;
    top: 5rem;
    left: 0;
    flex-direction: column;
    animation: ${({ $menuanimationstate }) => {
        switch ($menuanimationstate) {
          case "open":
            return openMenuAnimation;
          case "close":
            return closeMenuAnimation;
          case "stale":
            return staleMenuAnimation;
          default:
            return "none";
        }
      }}
      1s linear forwards;
  }
  @media (max-width: 576px) {
    overflow: hidden;
    padding-top: 0rem;
  }
`;

export const LogoImage = styled(Image)`
  width: 8rem;
  height: 3rem;
`;
export const HeaderText = styled.p<{ $color: string }>`
  padding-top: 1rem;
  color: ${(props) => props.$color};
  text-decoration: none;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;
  font-size: calc(0.8rem + 0.2vw);

  @media (max-width: 868px) {
    padding: 0;
    color: white;
  }
`;
export const StyledLink = styled(Link)<{ $color: string }>`
  color: ${(props) => props.$color};
  text-decoration: none;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  font-weight: bold;
  font-size: calc(0.8rem + 0.2vw);
  &:hover {
    color: black;
    border-bottom: 0.05rem solid black;
  }
  @media (max-width: 576px) {
    overflow: hidden;
    padding-top: 0rem;
    font-size: 1rem;
  }
`;
export const StyledLinkLogo = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
`;
