import styled, { css } from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme, color }) => theme.pallete[color]};

  /* 공통사항 */
  color: ${({ theme }) => theme.pallete.lightIvory};
  outline: none;
  border: none;
  border-radius: 0.25rem;
  font-size: 2rem;
  letter-spacing: ${({ theme }) => theme.font.letterSpace};
  cursor: pointer;
  padding: 0 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme, color }) =>
      color && darken(0.1, theme.pallete[color])};
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const AppWrapper = styled.div`
  margin: 0 auto;
  min-width: 320px;
  max-width: 425px;
  height: 100vh;
  max-height: 812px;
  margin-top: 3rem;
`;
