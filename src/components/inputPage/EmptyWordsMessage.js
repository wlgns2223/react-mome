import React from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";

export default function EmptyWordsMessage() {
  const history = useHistory();
  const location = useLocation();
  const inputUrl = "/input";
  const emptyWordsMessage = `π€ μλ ₯λ λ¨μ΄λ€μ΄ μλ€μ...\n
π μλμμ λ¨μ΄λ₯Ό μΆκ°ν΄λ³΄μΈμ.`;

  const message = "π€ μλ ₯λ λ¨μ΄λ€μ΄ μλ€μ...";
  const buttonMessage = ` π λ¨μ΄μλ ₯ νλ¬κ°κΈ°`;
  const isInputPage = () => {
    return location.pathname === inputUrl;
  };

  const onClick = (e) => {
    e.preventDefault();
    history.push("/input");
  };

  return (
    <Container>
      <EmptyListText>
        {isInputPage() ? emptyWordsMessage : message}
      </EmptyListText>
      {isInputPage() ? null : (
        <GoToInput width="100%" height="2.5rem" color="navy" onClick={onClick}>
          {buttonMessage}
        </GoToInput>
      )}
    </Container>
  );
}
const Container = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const GoToInput = styled.a`
  width: 100%;
  display: block;
  border-radius: 4px;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  color: white;
  background-color: ${({ theme }) => theme.pallete.navy};
  font-size: 1.125rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
`;
const EmptyListText = styled.pre`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
