import React from "react";
import styled from "styled-components";

export default function Template({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 70px);
  background: ${({ theme }) => theme.pallete.lightIvory};
`;
