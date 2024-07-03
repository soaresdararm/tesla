import React, { useState } from "react";
import {
  Container,
  ImageSection,
  DetailsSection,
  Title,
  Description,
  Tabs,
  Tab,
  OptionsContainer,
  Option,
  Info,
  NavigationButton,
} from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


interface CarDetailsProps {
  imageSrc: string[];
  title: string;
  info1: JSX.Element;
  info2: JSX.Element;
  info3: JSX.Element;
}

const CarDetails: React.FC<CarDetailsProps> = ({
  imageSrc,
  title,
  info1,
  info2,
  info3,
}) => {
  const [activeTab, setActiveTab] = useState<"comprar" | "alugar">("comprar");
  const [showNavigation, setShowNavigation] = useState(false);
  let sliderRef: Slider | null = null;

  const handleTabClick = (tab: "comprar" | "alugar") => {
    setActiveTab(tab);
  };

  const options = {
    comprar: ["Opção de Compra 1", "Opção de Compra 2"],
    alugar: ["Opção de Aluguel 1", "Opção de Aluguel 2"],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleMouseEnter = () => {
    setShowNavigation(true);
  };

  const handleMouseLeave = () => {
    setShowNavigation(false);
  };
  return (
    <Container>
      <ImageSection
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showNavigation && (
          <>
            <NavigationButton
              onClick={() => sliderRef?.slickPrev()}
              position="left"
            >
              &#10094;
            </NavigationButton>
            <NavigationButton
              onClick={() => sliderRef?.slickNext()}
              position="right"
            >
              &#10095;
            </NavigationButton>
          </>
        )}
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {imageSrc.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`${title} image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </ImageSection>
      <DetailsSection>
        <Title>{title}</Title>
        <Description>
          <Info>{info1}</Info>
          <Info>{info2}</Info>
          <Info>{info3}</Info>
        </Description>
        <Tabs>
          <Tab
            active={activeTab === "comprar"}
            onClick={() => handleTabClick("comprar")}
          >
            Comprar
          </Tab>
          <Tab
            active={activeTab === "alugar"}
            onClick={() => handleTabClick("alugar")}
          >
            Alugar
          </Tab>
        </Tabs>
        <OptionsContainer>
          {options[activeTab].map((option) => (
            <Option key={option}>{option}</Option>
          ))}
        </OptionsContainer>
      </DetailsSection>
    </Container>
  );
};

export default CarDetails;
