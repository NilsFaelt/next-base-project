import React, { FC, useContext } from "react";
import { Container, MarginLeftWrapper } from "./HomePageView.style";
import { MainImage } from "@/components/MainImage/MainImage.component";
import {
  DisplayArticles,
  DisplayHowWeWork,
  HowWeWork,
  SecondaryTitle,
} from "@/components";
import { Article } from "@/components/Article";
import { PrimaryButton } from "@/ui/buttons";
import { DarkmodeContext } from "@/context";

export const HomePageView: FC = () => {
  const { toogleDarkMode, setToogleDarkMode } = useContext(DarkmodeContext);

  return (
    <Container
      $bgcolor={toogleDarkMode ? "  rgba(245,245,245,255)" : "rgb(31,31,37)"}
    >
      <MainImage />
      <MarginLeftWrapper>
        <SecondaryTitle text='Latest News' />
      </MarginLeftWrapper>
      <DisplayArticles>
        <Article
          imageSrc='/images/face.jpeg'
          titleText='Välkommen Niklas!'
          text='Niklas är en mycket erfaren arkitekt med djup teknisk kunskap i
          systemutveckling och integration hela vägen till mer verksamhetsnära
          aktiviteter som kravhantering, lösningsarkitektur och
          produktutveckling. Detta bidrar ytterligare till...'
        />

        <Article
          imageSrc='/images/mikaela.jpeg'
          titleText='Hej Mikaela!'
          text='Mikaelas tekniska kompetens i kombination med hennes erfarenhet och intresse inom UI och Design är en enorm styrka och vi vet att hon...'
        />

        <Article
          imageSrc='/images/martin.jpeg'
          titleText='Martin backudd!'
          text='
          Martin är fullstack-utvecklare och försvinner rakt ut i ett spännande uppdrag hos en utav våra viktiga kunder inom e-handel.'
        />
      </DisplayArticles>
      <PrimaryButton text='READ MORE NEWS' />
      <DisplayHowWeWork>
        <HowWeWork
          titleText='Developed by B3'
          text='Vi skapar och underhåller fantastiska upplevelser – för användare och kunder. Skalbart, kostnadseffektivt och flexibelt, från idé till livscykel.'
        />
        <HowWeWork
          titleText='Expertkonsulting'
          text='Kompetenta konsulter i teknikens framkant. Förstärkning när och där det behövs.'
        />
        <HowWeWork
          titleText='Hör av dig!'
          text='Tveka inte att kontakta oss så skräddarsyr vi en lösning utefter just ditt behov.'
        />
      </DisplayHowWeWork>
    </Container>
  );
};
