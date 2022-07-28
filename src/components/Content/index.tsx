import { useEffect, useState } from "react";
import { MdShuffle, MdFlipCameraAndroid } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Button from "../Button";
import Card from "../Card";
import getData from "../../helper/getData";
import randomness from "../../helper/randomness";

import { Container, ButtonsContainer, CardsContainer, Link } from "./styles";
import { IData } from "../../interfaces/types";

const Content: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState<number>();
  let [suffle, setSuffle] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    setIsLoading(true);
    getData(5) // Getting 5 elements
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (count > 3) setCount(1);
  }, [count]);

  if (isError) {
    return (
      <Container>
        <p>Something went wrong</p>
      </Container>
    );
  }

  if (!data || isLoading) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <ButtonsContainer>
        <Button
          variant="cyan"
          disabled={!!(count < 3)}
          onClick={() => {
            setCount((count) => (count === 3 ? (count = 0) : (count = count)));
            setSuffle(randomness(suffle));
          }}
        >
          Shuffle <MdShuffle />
        </Button>
        <Button
          variant="orange"
          disabled={!!(count === 3)}
          onClick={() => {
            setCount((count) => count + 1);
            setRandom(Math.floor(Math.random() * 5));
          }}
        >
          Pull
          <MdFlipCameraAndroid />
        </Button>
      </ButtonsContainer>
      <CardsContainer suffle={suffle}>
        {data.map((item, index) => (
          <Card
            key={item.id}
            src={item.image_link}
            name={item.name}
            description={item.diet}
            points={(index + 1).toString().padStart(2, "0")}
            active={!!(index === random)}
          />
        ))}
      </CardsContainer>
      <p>
        <Link href="https://github.com/JefersonLucas">
          <AiFillGithub /> JefersonLucas
        </Link>
        <Link href="https://www.linkedin.com/in/jeferson-lucas/">
          <AiFillLinkedin /> Jeferson Lucas
        </Link>
      </p>
    </Container>
  );
};

export default Content;
