import React, { useState } from "react";
import styled, { css } from "styled-components";
import Result from "./Result";
import { darken } from "polished";

export default function WordNameCard({ word, onAppendInput, onSetIndex }) {
  const [answer, setAnswer] = useState("");
  const [done, setDone] = useState(false);
  const [correct, setCorrect] = useState(false);
  const onChange = (e) => {
    setAnswer(e.target.value);
  };

  const isCorrect = (word, answer) => word.meaning === answer;
  const onClick = () => {
    const next = () => {
      setTimeout(() => {
        setDone(false);
      }, 1000);
    };
    setAnswer("");
    onAppendInput({ answer, correct: isCorrect(word, answer) });
    onSetIndex();

    setDone(true);
    setCorrect(isCorrect(word, answer));
    next();
  };
  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <>
      <Container>
        <Card>
          <span>{word.name}</span>
        </Card>
        <InputContainer>
          <Input
            placeholder="뜻을 입력하세요"
            value={answer}
            onChange={onChange}
            onKeyPress={onEnterKeyPress}
          />
          <InputButton onClick={onClick}>입력</InputButton>
        </InputContainer>
      </Container>
      {done ? <Result correct={correct} /> : null}
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 4rem;
  margin: 0 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.pallete.navy};
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
  width: 100%;
  padding-left: 1.5rem;
`;

const InputButton = styled.button`
  width: 6rem;
  height: 3rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.pallete.lightIvory};
  background-color: ${({ theme }) => theme.pallete.lightPink};
  padding: 0.25rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
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

const Card = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  span {
    font-size: 4rem;
    color: ${({ theme }) => theme.pallete.navy};
  }
`;
