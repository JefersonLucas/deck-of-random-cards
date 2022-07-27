import { RiQuestionMark } from "react-icons/ri";
import { Container } from "./styles";
import { ICard } from "./types";

const Card: React.FC<ICard> = ({ src, name, points, description, active }) => {
  return (
    <Container>
      <div className={`front ${active && "active"}`}>
        <RiQuestionMark />
      </div>
      <div className={`back ${active && "active"}`}>
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
