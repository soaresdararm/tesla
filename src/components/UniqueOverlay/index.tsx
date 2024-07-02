import React from "react";
import { useTransform } from "framer-motion";
import { useWrapperScroll } from "../Modal";
import { Container, Footer } from "./styles";
import Header from "../Header";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header />
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💜</a>
          </li>
          <li>
            <a href="#">by Guilherme Rodz</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
