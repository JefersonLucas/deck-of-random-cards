import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
`;

export const Image = styled.img.attrs({
  draggable: false,
})`
  width: 55px;
  height: 55px;
`;
