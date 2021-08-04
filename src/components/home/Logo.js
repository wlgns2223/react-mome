import React, { useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";

export default function Logo() {
  const themeContext = useContext(ThemeContext);
  return (
    <LogoWrapper>
      <Sqaure color={themeContext.pallete.lightPink} zIndex="1" />
      <Sqaure color={themeContext.pallete.navy} zIndex="2" />
      <Sqaure color={themeContext.pallete.mint} zIndex="3">
        <Title>MOME</Title>
      </Sqaure>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.header`
  position: relative;
  margin-top: 3rem;
  height: 305px;
`;

const Sqaure = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 225px;
  border-radius: 16px;
  position: absolute;
  z-index: ${(props) => props.zIndex};
  top: ${({ zIndex }) => {
    if (zIndex === "1") return "0px;";
    else if (zIndex === "2") return "40px;";
    else return "80px;";
  }};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.pallete.lightIvory};
  font-size: 64px;
  letter-spacing: ${({ theme }) => theme.font.letterSpace};
`;
