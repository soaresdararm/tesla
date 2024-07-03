import React from "react";

import { ModelsWrapper, ModelSection } from "../../components/Modal";
import DefaultOverlayContent from "../../components/DefaultOverlayContent";
import UniqueOverlay from "../../components/UniqueOverlay";

import { Container, Spacer } from "./styles";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { cardData } from "../../components/Header";

const Page: React.FC = () => {
  const navigate = useNavigate();

  const handleReadClick = (carId: string) => {
    navigate(`/details/${carId}`);
  };

  return (
    <Container>
      <GlobalStyles />
      <ModelsWrapper>
        <div>
          {cardData.map((data, index) => (
            <ModelSection
              key={index}
              className="colored"
              modelName={data.title}
              overlayNode={
                <DefaultOverlayContent
                  label={data.title}
                  description="Order Online for Delivery"
                  onClink={() => handleReadClick(data.id)}
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
