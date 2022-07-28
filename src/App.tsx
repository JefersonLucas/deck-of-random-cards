import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

import Modal from "./components/Modal";
import Layout from "./components/Layout";
import Form from "./components/Form";

import useModal from "./hooks/useModal";

function App() {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Layout />
      <Modal isOpen={!isModalOpen} onClose={toggleModal}>
        <Form toggleModal={toggleModal} />
      </Modal>
    </ThemeProvider>
  );
}

export default App;
