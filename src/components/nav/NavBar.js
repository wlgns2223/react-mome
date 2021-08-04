import React from "react";
import styled from "styled-components";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";

export default function NavBar() {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };

  return (
    <Header>
      <ArrowBack onClick={onClick}>
        <MdArrowBack />
      </ArrowBack>
      <Title>MOME</Title>
    </Header>
  );
}

const Header = styled.header`
  padding: 0.25rem 1rem;
  height: 70px;
  background-color: ${({ theme }) => theme.pallete.navy};
  min-width: 320px;
  max-width: 425px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 2rem;
  color: ${({ theme }) => theme.pallete.white};
  letter-spacing: ${({ theme }) => theme.font.letterSpace};
`;

const ArrowBack = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.pallete.mint};
  font-size: 3rem;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
`;
