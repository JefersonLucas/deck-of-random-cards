import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
