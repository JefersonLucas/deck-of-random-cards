import { Container } from "./styles";
import Menu from "../Menu";
import Content from "../Content";

const Layout: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content />
    </Container>
  );
};

export default Layout;
