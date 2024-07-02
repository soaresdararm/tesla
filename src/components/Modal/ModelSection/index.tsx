import React, { useEffect, useRef } from "react";


import { Container } from "./styles";
import useModel from "../useModel";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef: ref,
      });
    }
  }, [children, modelName, overlayNode, registerModel]);

  return (
    <Container ref={ref} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
