import styled from "styled-components";

export const CardContainer = styled.div`
  width: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 155px;
  height: 100px;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin: 5px;
  text-align: center;
  color: #333;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  color: black;
  font-size: 12px;
  cursor: pointer;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
