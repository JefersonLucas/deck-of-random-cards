import styled from "styled-components";
import { IButton } from "./types";

export const Container = styled.button<IButton>`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;
  text-align: center;

  background: ${({ variant, theme }) => theme.colors.others[variant]};
  color: ${({ theme }) => theme.colors.text.white};
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);

  &:hover {
    box-shadow: 4px 4px 5px 1px rgb(0 0 0 / 14%);
    opacity: 0.7;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: ${({ disabled }) => (disabled ? "0.5" : "0")};
    cursor: ${({ disabled }) => (disabled ? "progress" : "pointer")};
  }
`;
