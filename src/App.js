import Template from "./components/Template";
import { GlobalStyles } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Route, Switch, useLocation } from "react-router-dom";

import Home from "./components/home";
import InputPage from "./components/inputPage";
import NavBar from "./components/nav/NavBar";

function App() {
  const url = useLocation();
  const homePath = "/";
  return (
    <ThemeProvider theme={theme}>
      {url.pathname === homePath ? null : <NavBar />}
      <Template>
        <Route path="/" exact component={Home} />
        <Route path="/input" component={InputPage} />
      </Template>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
