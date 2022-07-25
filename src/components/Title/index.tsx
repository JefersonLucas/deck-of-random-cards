import { Container } from "./styles";
import { ITitle } from "./types";

const Title: React.FC<ITitle> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Title;
