import styled from "styled-components";
import { InputProps } from "./types";

export const Container = styled.input<InputProps>`
  width: 100%;
  padding: 12px 14px;

  border-radius: 4px;
  transition: 0.3s;

  caret-color: ${({ theme }) => theme.colors.others.cyan};
  color: ${({ theme }) => theme.colors.text.black};
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid transparent;

  &:focus,
  &:hover {
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.others.red : theme.colors.others.cyan};
    box-shadow: 0 0 3px 1px
      ${({ theme, error }) =>
        error ? theme.colors.others.red : theme.colors.others.cyan};
  }
`;

export const Error = styled.small`
  color: ${({ theme }) => theme.colors.others.red};
  margin-top: 5px;
  padding-left: 5px;
`;
