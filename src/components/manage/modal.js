import React from "react";
import styled from "styled-components";
import { Button } from "../common/CommonComponents";

export default function Modal({
  title,
  children,
  visible,
  onCancel,
  onConfirm,
}) {
  if (!visible) return null;
  return (
    <DarkBackground>
      <ModalBlock>
        <span>{title}</span>
        <p>데이터를 정말로 삭제하시겠습니까?</p>
        <ButtonGroup>
          <ModalButton
            width="auto"
            height="2rem"
            color="navy"
            onClick={onCancel}
          >
            취소
          </ModalButton>
          <ModalButton
            width="auto"
            height="2rem"
            color="lightPink"
            onClick={onConfirm}
          >
            삭제
          </ModalButton>
        </ButtonGroup>
      </ModalBlock>
    </DarkBackground>
  );
}

const ModalButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0;
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  max-height: 882px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalBlock = styled.div`
  max-width: 375px;
  padding: 1.5rem;
  background-color: white;
  border-radius: 2px;
  span {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
    margin-top: 2rem;
  }
`;
const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
