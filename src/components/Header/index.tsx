import React, { useState } from "react";
import {
  HeaderWrapper,
  Logo,
  Menu,
  MenuItem,
  Icons,
  Icon,
  Drawer,
  DrawerGrid,
  DrawerCard,
  CardContainer,
} from "./styles";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal";

export const cardData = [
  {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
    title: "Model S",
    id: "model-s",
  },
  {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png",
    title: "Model 3",
    id: "model-3",
  },
  {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
    title: "Model X",
    id: "model-x",
  },
  {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
    title: "Model Y",
    id: "model-y",
  },
  {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
    title: "Model X",
    id: "model-x",
  },
  {
    imageSrc:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
    title: "Model Y",
    id: "model-y",
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => setIsDrawerOpen(true);
  const handleMouseLeave = () => setIsDrawerOpen(false);

  const handleReadClick = (carId: string) => {
    navigate(`/details/${carId}`);
  };

  const handleOrderClick = () => {
    console.log("Ordenar clicado");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderWrapper isDrawerOpen={isDrawerOpen} onMouseLeave={handleMouseLeave}>
      <Logo />
      <Menu>
        <MenuItem href="#" onMouseEnter={handleMouseEnter}>
          Veículos
        </MenuItem>
      </Menu>
      <Icons>
        <Icon
          src="https://s2.svgbox.net/hero-outline.svg?ic=user-circle"
          alt="Icon 3"
          onClick={toggleModal}
        />
      </Icons>
      {isDrawerOpen && (
        <Drawer>
          <DrawerGrid>
            <CardContainer>
              {cardData.map((data, index) => (
                <DrawerCard key={index}>
                  <Card
                    imageSrc={data.imageSrc}
                    title={data.title}
                    onReadClick={() => handleReadClick(data.id)}
                    onOrderClick={handleOrderClick}
                  />
                </DrawerCard>
              ))}
            </CardContainer>
          </DrawerGrid>
        </Drawer>
      )}
      {isModalOpen && <LoginModal onClose={toggleModal} />}
    </HeaderWrapper>
  );
};

export default Header;
