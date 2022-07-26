import { useEffect, useState } from "react";
import { MdShuffle, MdFlipCameraAndroid } from "react-icons/md";
import { Container, ButtonsContainer, CardsContainer } from "./styles";
import Button from "../Button";
import Card from "../Card";
import { IData } from "../../interfaces/types";
import getData from "../../helper/getData";

const Content: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData(5) // Passing 5 elements
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

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
        <Button variant="cyan" onClick={() => console.log("first")}>
          Shuffle <MdShuffle />
        </Button>
        <Button variant="orange" onClick={() => console.log("second")}>
          Pull
          <MdFlipCameraAndroid />
        </Button>
      </ButtonsContainer>
      <CardsContainer>
        {data.map((item, index) => (
          <Card
            key={item.id}
            src={item.image_link}
            name={item.name}
            description={item.diet}
            points={(index + 1).toString().padStart(2, "0")}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Content;
