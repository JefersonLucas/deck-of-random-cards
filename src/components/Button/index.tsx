import { Container } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
