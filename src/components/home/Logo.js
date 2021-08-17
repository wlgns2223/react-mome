import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

export default function Logo() {
  const themeContext = useContext(ThemeContext);
  return (
    <LogoWrapper>
      <Sqaure color={themeContext.pallete.mint}>
        <Title>MOME</Title>
      </Sqaure>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Sqaure = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 150px;
  border-radius: 0.25rem;
  z-index: ${(props) => props.zIndex};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.pallete.lightIvory};
  font-size: 64px;
  letter-spacing: ${({ theme }) => theme.font.letterSpace};
`;
