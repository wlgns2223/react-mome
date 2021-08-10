import React, { useState } from "react";
import { Button, ComponentsWrapper } from "../common/CommonComponents";
import styled from "styled-components";
import Modal from "./modal";
import WordCardListContainer from "../inputPage/WordCardListContainer";

export default function Manage() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const onConfirm = () => {
    setModalVisibility(false);
  };
  const onCancel = () => {
    setModalVisibility(false);
  };

  const onDeleteAll = () => {
    setModalVisibility(true);
  };

  return (
    <ComponentsWrapper>
      <WordCardListContainer />
      <ClearButtonPositioner>
        <ClearButton
          width="100%"
          height="40px"
          color="lightPink"
          onClick={onDeleteAll}
        >
          모두삭제
        </ClearButton>
      </ClearButtonPositioner>
      <Modal
        title="정말로 삭제하시겠습니까?"
        visible={modalVisibility}
        onConfirm={onConfirm}
        onCancel={onCancel}
      >
        데이터를 정말로 삭제하시겠습니까?
      </Modal>
    </ComponentsWrapper>
  );
}

const ClearButtonPositioner = styled.div`
  margin-bottom: 2rem;
`;
const ClearButton = styled(Button)`
  font-size: 1.5rem;
`;
