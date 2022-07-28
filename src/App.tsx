import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

import Modal from "./components/Modal";
import Layout from "./components/Layout";
import Form from "./components/Form";

import useModal from "./hooks/useModal";
import useUsername from "./hooks/useUsername";

function App() {
  const { isModalOpen, toggleModal } = useModal();
  const { name } = useUsername();

  return (
    <div onLoad={() => !name && toggleModal()}>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Layout />
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <Form toggleModal={toggleModal} />
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default App;
