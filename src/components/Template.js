import React from "react";
import styled from "styled-components";

export default function Template({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 16px;
  min-width: 320px;
  max-width: 425px;
  height: 100vh;
  max-height: 812px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.pallete.lightIvory};
`;
