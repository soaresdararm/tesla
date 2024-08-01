import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 70%;
  padding-top: 1%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailsSection = styled.div`
  width: 30%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding-top: 20px;
    width: 80%;
  }
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

export const NavigationButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.position === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;

  > button {
    background: #f4f4f4;
    color: #393c41;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;

    padding: 13px 40px;
    border: none;
    outline: 0;
    cursor: pointer;

    & + button {
      margin: 10px 0 0;
    }
  }
`;
