import styled from "styled-components";
import { LogoSVG } from "../UniqueOverlay/IconSVG";

interface HeaderWrapperProps {
  isDrawerOpen: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  min-height: 52px;
  background-color: ${({ isDrawerOpen }) => (isDrawerOpen ? "white" : "")};
`;

export const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #000;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 15px;
  background-color: transparent;
`;

export const Icon = styled.img`
  height: 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Drawer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
`;

export const DrawerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);

  justify-content: center;
`;

export const DrawerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
