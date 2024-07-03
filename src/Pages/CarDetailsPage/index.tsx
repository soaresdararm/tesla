import React from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../../components/CarDetails";

import { Container, HeaderWrapper, Logo } from "./styles";

interface CarData {
  [key: string]: {
    imageSrc: string[];
    title: string;
    info1: JSX.Element;
    info2: JSX.Element;
    info3: JSX.Element;
  };
}

const carData: CarData = {
  "model-s": {
    imageSrc: [
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    ],
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
    imageSrc: [
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    ],
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
    imageSrc: [
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    ],
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
    imageSrc: [
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
    ],
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
        <Logo href="/Home"> LOGO </Logo>
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
