import React from "react";
import styled from "styled-components";
import { Button } from "../common/CommonComponents";

export default function ClearAll({ onDeleteAll }) {
  return (
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
  );
}

const ClearButtonPositioner = styled.div`
  margin-bottom: 2rem;
`;
const ClearButton = styled(Button)`
  font-size: 1.5rem;
`;
