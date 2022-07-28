import { FormEvent } from "react";

import Input from "../Input";
import Button from "../Button";

import useUsername from "../../hooks/useUsername";
import useForm from "../../hooks/useForm";

import { Container } from "./styles";

const Form: React.FC<{ toggleModal: () => void }> = ({ toggleModal }) => {
  const { setName: setUsername } = useUsername();
  const username = useForm("name");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate()) {
      setUsername(username.value);
      toggleModal();
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="What's your name?"
        required
        {...username}
      />
      <Button type="submit" variant="cyan" disabled={username.value === ""}>
        See cards
      </Button>
    </Container>
  );
};

export default Form;
