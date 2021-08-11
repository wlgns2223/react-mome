import React from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import { Button } from "../common/CommonComponents";

export default function EmptyWordsMessage() {
  const history = useHistory();
  const location = useLocation();
  const manageUrl = "/manage";
  const emptyWordsMessage = `🤔 입력된 단어들이 없네요...\n
👇 아래에서 단어를 추가해보세요.`;

  const manageMessage = "🤔 입력된 단어들이 없네요...";
  const buttonMessage = ` 🚗 단어입력 하러가기`;
  const isManagePage = () => {
    return location.pathname === manageUrl;
  };

  const onClick = () => {
    history.push("/input");
  };

  return (
    <Container>
      <EmptyListText>
        {isManagePage() ? manageMessage : emptyWordsMessage}
      </EmptyListText>
      {isManagePage() ? (
        <GoToInput width="100%" height="2.5rem" color="navy" onClick={onClick}>
          {buttonMessage}
        </GoToInput>
      ) : null}
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
`;
const GoToInput = styled(Button)`
  font-size: 1.125rem;
  letter-spacing: 0.2rem;
`;
const EmptyListText = styled.pre`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
