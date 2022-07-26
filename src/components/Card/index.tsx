import { RiQuestionMark } from "react-icons/ri";
import { Container } from "./styles";
import { ICard } from "./types";

const Card: React.FC<ICard> = ({ src, name, points, description }) => {
  return (
    <Container>
      <div className="front">
        <RiQuestionMark />
      </div>
      <div className="back">
        <img src={src} draggable={false} />
        <h3>{name}</h3>
        <strong>{points}</strong>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default Card;
