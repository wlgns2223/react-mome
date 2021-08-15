import React from "react";
import { MdDone, MdClear } from "react-icons/md";
import styled from "styled-components";

export function Correct() {
  return (
    <CorrectIcon>
      <MdDone />
    </CorrectIcon>
  );
}

export function False() {
  return (
    <FalseIcon>
      <MdClear />
    </FalseIcon>
  );
}

const CorrectIcon = styled.div`
  color: #51cf66;
  width: 100%;
  height: 100%;
`;
const FalseIcon = styled.div`
  color: #ff6b6b;
  width: 100%;
  height: 100%;
`;
