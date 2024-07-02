import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImageSection = styled.div`
  width: 70%;
  padding-top: 5%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailsSection = styled.div`
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Info = styled.div`
  text-align: center;
`;
export const Tabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 16px;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: transparent;
  border-bottom: ${({ active }) => (active ? "2px solid #000 " : "")};
  color: black;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    border-bottom: 2px solid #007bff;
  }

  &:focus {
    outline: none;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Option = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;
