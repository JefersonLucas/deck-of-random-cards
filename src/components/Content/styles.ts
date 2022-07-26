import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 80px auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
`;
