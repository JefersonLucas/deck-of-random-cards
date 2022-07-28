export interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface CloseProps {
  onClick: () => void;
}
