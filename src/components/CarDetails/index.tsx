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
  Buttons,
} from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";

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
  const [openModal, setOpenModal] = useState(false);

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

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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

        <Buttons>
          <Button onClick={handleOpenModal}>Detalhes do recurso</Button>
        </Buttons>
      </DetailsSection>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 750,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div>
            <img
              src={
                "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/A01_Model-3-Upgraded.jpeg?"
              }
              alt={""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            />
          </div>
          <div
            style={{
              margin: 10,
              gap: 8,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              x
            </IconButton>
            <div style={{ paddingTop: 25 }}>
              <Typography id="modal-subtitle" variant="h6" component="h2">
                Detalhes do recurso
              </Typography>
              <Typography id="modal-description" sx={{ mt: 1, fontSize: 12 }}>
                Refinado com mais alcance, um interior premium totalmente novo e
                um passeio visivelmente mais silencioso.
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </Container>
  );
};

export default CarDetails;
