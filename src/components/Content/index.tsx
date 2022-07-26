import Button from "../Button";
import { MdShuffle, MdFlipCameraAndroid } from "react-icons/md";

import { Container, ButtonsContainer, CardsContainer } from "./styles";
import Card from "../Card";
import { ICard } from "../Card/types";

const Content: React.FC = () => {
  const cards: ICard[] = [
    {
      src: "https://www.gstatic.com/webp/gallery/1.jpg",
      name: "montain",
      points: Math.floor(Math.random() * 10),
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex    iure deleniti distinctio explicabo doloribus reiciendis qui laborum debitis inventore.",
    },
    {
      src: "https://www.gstatic.com/webp/gallery/1.jpg",
      name: "montain",
      points: Math.floor(Math.random() * 10),
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex    iure deleniti distinctio explicabo doloribus reiciendis qui laborum debitis inventore.",
    },
    {
      src: "https://www.gstatic.com/webp/gallery/1.jpg",
      name: "montain",
      points: Math.floor(Math.random() * 10),
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex    iure deleniti distinctio explicabo doloribus reiciendis qui laborum debitis inventore.",
    },
    {
      src: "https://www.gstatic.com/webp/gallery/1.jpg",
      name: "montain",
      points: Math.floor(Math.random() * 10),
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex    iure deleniti distinctio explicabo doloribus reiciendis qui laborum debitis inventore.",
    },
    {
      src: "https://www.gstatic.com/webp/gallery/1.jpg",
      name: "montain",
      points: Math.floor(Math.random() * 10),
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex    iure deleniti distinctio explicabo doloribus reiciendis qui laborum debitis inventore.",
    },
  ];
  return (
    <Container>
      <ButtonsContainer>
        <Button variant="cyan">
          Shuffle <MdShuffle />
        </Button>
        <Button variant="orange">
          Pull
          <MdFlipCameraAndroid />
        </Button>
      </ButtonsContainer>
      <CardsContainer>
        {cards.map((item) => (
          <Card {...item} key={Math.random() * item.points} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Content;
