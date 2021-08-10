import React from "react";
import styled from "styled-components";

export default function EmptyNavBar() {
  return <Header />;
}

const Header = styled.div`
  height: 70px;
  background-color: ${({ theme }) => theme.pallete.lightIvory};
  min-width: 320px;
  max-width: 425px;
  box-sizing: border-box;
`;
