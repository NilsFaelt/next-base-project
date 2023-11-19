"use client";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import {
  Container,
  DarktModeLanguageContainer,
  HeaderText,
  LinksContainer,
  LogoImage,
  StyledLink,
} from "./HeaderWithNav.style";
import { BarOne, BarThree, BarTwo, BarWrapper } from "./BurgerMenu.style";
import { DarkmodeContext } from "@/context";

interface Props {}
interface BurgerMenuProps {
  setToogleMenu: Dispatch<SetStateAction<boolean | null>>;
  toogleMenu: boolean | null;
}

export const HeaderWithNav: FC<Props> = () => {
  const { toogleDarkMode, setToogleDarkMode } = useContext(DarkmodeContext);
  const [toogleMenu, setToogleMenu] = useState<boolean | null>(null);
  const Links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "Clients", href: "/" },
    { text: "About", href: "/about" },
    { text: "Tech talks", href: "/" },
    { text: "Career", href: "/" },
    { text: "News", href: "/about" },
    { text: "Contact", href: "/" },
  ];
  return (
    <Container
      $bgcolor={toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"}
    >
      {toogleDarkMode ? (
        <LogoImage
          priority
          src={"/svg/logo.svg"}
          alt={"next logo"}
          width={25}
          height={25}
        />
      ) : (
        <LogoImage
          priority
          src={"/svg/logo_white.svg"}
          alt={"next logo"}
          width={25}
          height={25}
        />
      )}
      <LinksContainer
        $bgcolor={toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"}
        $menuanimationstate={
          toogleMenu === null ? "stale" : toogleMenu === true ? "open" : "close"
        }
      >
        {Links.map((link, i) => {
          return (
            <StyledLink
              $color={
                !toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"
              }
              onClick={() => setToogleMenu(false)}
              key={i}
              href={link.href}
            >
              {link.text}
            </StyledLink>
          );
        })}
      </LinksContainer>
      <DarktModeLanguageContainer>
        <HeaderText
          $color={!toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"}
          onClick={() => setToogleDarkMode(!toogleDarkMode)}
        >
          {toogleDarkMode ? "Dark" : "Light"}
        </HeaderText>
        <HeaderText
          $color={!toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"}
        >
          EN
        </HeaderText>
      </DarktModeLanguageContainer>
      <BurgerMenu setToogleMenu={setToogleMenu} toogleMenu={toogleMenu} />
    </Container>
  );
};

export const BurgerMenu: FC<BurgerMenuProps> = ({
  setToogleMenu,
  toogleMenu,
}) => {
  const { toogleDarkMode, setToogleDarkMode } = useContext(DarkmodeContext);
  return (
    <BarWrapper onClick={() => setToogleMenu(!toogleMenu)}>
      <BarOne
        $bgcolor={!toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"}
      />
      <BarTwo
        $bgcolor={!toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"}
      />
      <BarThree
        $bgcolor={!toogleDarkMode ? "rgba(255, 255, 255, 1)" : "rgb(31,31,37)"}
      />
    </BarWrapper>
  );
};

//to skip animation when changing page: onClick={() => setToogleMenu(null)}
//Pnpm/npm: styled-components
//If needed update to server-component by removeing "use client"
