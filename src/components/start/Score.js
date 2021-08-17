import React from "react";
import ResultGif from "./Gif";
import styled, { css } from "styled-components";
import { Button } from "../common/CommonComponents";
import { useHistory } from "react-router";
import { darken } from "polished";

export default function Score({ wordsLen, inputs }) {
  const correctAnswers = inputs.filter((input) => input.correct).length;
  const message = `결과: ${correctAnswers} / ${wordsLen}`;
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };

  return (
    <>
      <Container>
        <ResultGif wordsLen={wordsLen} inputs={inputs} />
        <NumberOfCorrect>{message}</NumberOfCorrect>
      </Container>
      <GoHome onClick={onClick}>홈으로</GoHome>
    </>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NumberOfCorrect = styled.span`
  font-size: 2rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.pallete.navy};
  font-weight: bold;
`;

const GoHome = styled(Button)`
  width: 100%;
  height: 3.5rem;
  margin: 2rem 1rem;
  background-color: ${({ theme }) => theme.pallete.lightPink};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    ${({ theme }) => {
      const color = theme.pallete.lightPink;
      return css`
        background-color: ${darken(0.1, color)};
      `;
    }}
  }
`;
