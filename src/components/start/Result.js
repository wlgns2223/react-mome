import React from "react";
import styled, { keyframes } from "styled-components";
import { Correct, False } from "./Icons";

export default function Result({ correct }) {
  return <IconContainer>{correct ? <Correct /> : <False />}</IconContainer>;
}

const IconAppearAnimation = keyframes`
from  {
  transform: scale(6,6);
} 

to {
  transform: scale(1,1);
}

`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  font-size: 8rem;

  animation: ${IconAppearAnimation} 300ms forwards ease-in-out;
`;
