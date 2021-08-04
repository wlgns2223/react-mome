import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const pallete = {
  navy: "#364F6B",
  mint: "#3FC1C9",
  lightIvory: "#F5F5F5",
  lightPink: "#FC5185",
  white: "#FFFFFF",
};

export const font = {
  letterSpace: "0.5rem",
};

export const GlobalStyles = createGlobalStyle`
${reset}
ul { list-style: none;}
a { text-decoration: none;}
`;

const theme = {
  pallete,
  font,
};

export default theme;
