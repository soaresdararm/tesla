import React from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../CarDetails";

import { Container, HeaderWrapper, Logo } from "./styles";

interface CarData {
  [key: string]: {
    imageSrc: string;
    title: string;
    info1: JSX.Element;
    info2: JSX.Element;
    info3: JSX.Element;
  };
}

const carData: CarData = {
  "model-s": {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
    title: "Model S",
    info1: (
      <>
        400 milhas
        <br />
        alcance
        <br />
        (estimativa EPA)
      </>
    ),
    info2: (
      <>
        130mph
        <br />
        Velocidade
        <br />
        máxima
      </>
    ),
    info3: (
      <>
        3,1 segundos
        <br />
        0-60mph
      </>
    ),
  },
  "model-3": {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png",
    title: "Model 3",
    info1: (
      <>
        400 milhas
        <br />
        alcance
        <br />
        (estimativa EPA)
      </>
    ),
    info2: (
      <>
        130mph
        <br />
        Velocidade
        <br />
        máxima
      </>
    ),
    info3: (
      <>
        3,1 segundos
        <br />
        0-60mph
      </>
    ),
  },
  "model-x": {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
    title: "Model X",
    info1: (
      <>
        400 milhas
        <br />
        alcance
        <br />
        (estimativa EPA)
      </>
    ),
    info2: (
      <>
        130mph
        <br />
        Velocidade
        <br />
        máxima
      </>
    ),
    info3: (
      <>
        3,1 segundos
        <br />
        0-60mph
      </>
    ),
  },
  "model-y": {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
    title: "Model Y",
    info1: (
      <>
        400 milhas
        <br />
        alcance
        <br />
        (estimativa EPA)
      </>
    ),
    info2: (
      <>
        130mph
        <br />
        Velocidade
        <br />
        máxima
      </>
    ),
    info3: (
      <>
        3,1 segundos
        <br />
        0-60mph
      </>
    ),
  },
};

const CarDetailsPage: React.FC = () => {
  const { carId } = useParams<{ carId: string }>();

  if (!carId || !carData[carId]) {
    return <div>Car not found</div>;
  }

  const car = carData[carId];

  return (
    <Container>
      <HeaderWrapper>
        <Logo href="/"> LOGO </Logo>
      </HeaderWrapper>
      <CarDetails
        imageSrc={car.imageSrc}
        title={car.title}
        info1={car.info1}
        info2={car.info2}
        info3={car.info3}
      />
    </Container>
  );
};

export default CarDetailsPage;
