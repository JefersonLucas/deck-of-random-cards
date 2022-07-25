import logo from "../../assets/logo.svg";
import { Link, Image } from "./styles";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
