import { Container, UserContainer, Username } from "./styles";
import { MdPerson } from "react-icons/md";
import Logo from "../Logo";
import useUsername from "../../hooks/useUsername";

const Menu: React.FC = () => {
  const { name } = useUsername();

  return (
    <Container>
      <Logo />
      <UserContainer>
        <MdPerson />
        <Username>{name}</Username>
      </UserContainer>
    </Container>
  );
};

export default Menu;
