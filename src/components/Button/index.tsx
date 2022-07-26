import { Container } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ children, variant }) => {
  return <Container variant={variant}>{children}</Container>;
};

export default Button;
