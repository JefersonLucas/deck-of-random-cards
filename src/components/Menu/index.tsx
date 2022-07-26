import { Container, UserContainer, Username } from "./styles";
import { MdPerson } from "react-icons/md";
import Logo from "../Logo";

const Menu: React.FC = () => {
  return (
    <Container>
      <Logo />
      <UserContainer>
        <MdPerson />
        <Username>Jeferson Lucas</Username>
      </UserContainer>
    </Container>
  );
};

export default Menu;
