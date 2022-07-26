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
        <img src={src} draggable={false} alt={name} />
        <h3>{name}</h3>
        <strong>{points}</strong>
        <em>
          <span>Diet: </span>
          {description}
        </em>
      </div>
    </Container>
  );
};

export default Card;
