import React from "react";

import { ModelsWrapper, ModelSection } from "../Modal";
import DefaultOverlayContent from "../DefaultOverlayContent";
import UniqueOverlay from "../UniqueOverlay";

import { Container, Spacer } from "./styles";
import { GlobalStyles } from "../../styles/GlobalStyles";

const Page: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <ModelsWrapper>
        <div>
          {[
            "Model 3",
            "Model Y",
            "Model Three",
            "Model Four",
            "Model Five",
            "Model Six",
         
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
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
