import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "cyan" | "orange";
}
