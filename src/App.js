import Template from "./components/Template";
import Logo from "./components/main/Logo";
import { GlobalStyles } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Template>
        <Logo />
      </Template>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
