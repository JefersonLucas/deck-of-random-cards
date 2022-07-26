import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.white};
  border-bottom: 5px solid ${({ theme }) => theme.colors.others.orange};
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  svg {
    width: 35px;
    height: 35px;
    color: ${({ theme }) => theme.colors.others.orange};
  }
`;

export const Username = styled.strong``;
