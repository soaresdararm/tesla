import React from "react";

import { Buttons, Container, Heading } from "./styles";

interface Props {
  label: string;
  description: string;
  onClink: any;
}

const DefaultOverlayContent: React.FC<Props> = ({
  label,
  description,
  onClink,
}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button onClick={onClink}>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
