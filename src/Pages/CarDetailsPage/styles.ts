import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  min-height: 52px;
`;

export const Logo = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  line-height: 30px;
  font-weight: 700;

  &:hover {
    color: #007bff;
    transform: scale(2);
  }
`;
