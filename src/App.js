import Template from "./components/Template";
import { GlobalStyles } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Route, useLocation } from "react-router-dom";

import Home from "./components/home";
import InputPage from "./components/inputPage";
import NavBar from "./components/nav/NavBar";
import EmptyNavBar from "./components/nav/EmptyNavBar";
import Manage from "./components/manage";
import { AppWrapper } from "./components/common/CommonComponents";

function App() {
  const url = useLocation();
  const homePath = "/";
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        {url.pathname === homePath ? <EmptyNavBar /> : <NavBar />}
        <Template>
          <Route path="/" exact component={Home} />
          <Route path="/input" component={InputPage} />
          <Route path="/manage" component={Manage} />
        </Template>
        <GlobalStyles />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
