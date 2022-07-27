import styled from "styled-components";
import { Suffle } from "./types";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 80px auto;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CardsContainer = styled.div<Suffle>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;

  div:nth-child(1) {
    order: ${({ suffle }) => suffle[0]};
  }
  div:nth-child(2) {
    order: ${({ suffle }) => suffle[1]};
  }
  div:nth-child(3) {
    order: ${({ suffle }) => suffle[2]};
  }
  div:nth-child(4) {
    order: ${({ suffle }) => suffle[3]};
  }
  div:nth-child(5) {
    order: ${({ suffle }) => suffle[4]};
  }
`;

export const Link = styled.a.attrs(() => ({
  target: "_blank",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  color: ${({ theme }) => theme.colors.others.orange};
  text-decoration: none;
`;
