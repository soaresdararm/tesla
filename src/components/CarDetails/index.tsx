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
} from "./styles";

interface CarDetailsProps {
  imageSrc: string;
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

  const handleTabClick = (tab: "comprar" | "alugar") => {
    setActiveTab(tab);
  };

  const options = {
    comprar: ["Opção de Compra 1", "Opção de Compra 2"],
    alugar: ["Opção de Aluguel 1", "Opção de Aluguel 2"],
  };

  return (
    <Container>
      <ImageSection>
        <img src={imageSrc} alt={title} />
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
