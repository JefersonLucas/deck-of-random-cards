import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 15px;
  perspective: 700px;
  user-select: none;

  .front,
  .back {
    position: absolute;
    width: 92%;
    height: 95%;
    padding: 10px;
    border-radius: 10px;
    transition: 700ms;
  }

  .front {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    z-index: 1;

    svg {
      width: 120px;
      height: 120px;
    }
  }

  .back {
    display: grid;
    grid-template-rows: 1fr 0.5fr 0.5fr;
    position: relative;
    gap: 5px;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    transform: rotateY(-180deg);
    backface-visibility: hidden;

    h3 {
      text-align: center;
    }

    strong {
      position: absolute;
      top: 15px;
      right: 20px;
      color: ${({ theme }) => theme.colors.text.white};
    }

    img {
      width: 210px;
      height: 210px;
      border-radius: 10px;
    }

    em {
      text-align: left;
      line-height: 16px;
    }

    span {
      font-weight: 700;
    }
  }

  &:hover .front {
    transform: rotateY(180deg);
    z-index: 0;
  }

  &:hover .back {
    z-index: 1;
    transform: rotateY(0);
    border: 1px solid ${({ theme }) => theme.colors.others.cyan};
    background-color: ${({ theme }) => theme.colors.background.secondary};
    box-shadow: 0px 0px 5px 2px rgba(0, 115, 187, 0.75);
  }
`;
