import React from "react";

import { Container, Error } from "./styles";

import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ ...props }) => (
  <>
    <Container {...props} />
    {props.error ? <Error>{props.error}</Error> : <Error> </Error>}
  </>
);

export default Input;
