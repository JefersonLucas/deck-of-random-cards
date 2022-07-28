import { useRef } from "react";

import { ModalProps } from "./types";

import { Container, Overlay, Box, Title, Content } from "./styles";

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.target === overlayRef.current && onClose();
  };

  return isOpen ? (
    <Container>
      <Overlay
        // ref={overlayRef}
        onClick={handleOverlayClick}
      />
      <Box>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Box>
    </Container>
  ) : null;
};

export default Modal;
