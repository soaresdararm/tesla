import React from "react";
import {
  CardContainer,
  Image,
  Title,
  ButtonsContainer,
  Button,
} from "./styles";

interface CardProps {
  imageSrc: string;
  title: string;
  onReadClick: () => void;
  onOrderClick: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  onReadClick,
  onOrderClick,
}) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={title} />
      <Title>{title}</Title>
      <ButtonsContainer>
        <Button onClick={onReadClick}>Learn</Button>
        <Button onClick={onOrderClick}>Order</Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;
