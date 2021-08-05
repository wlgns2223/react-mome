import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { useHistory } from "react-router";

export default function ButtonList() {
  const history = useHistory();
  const goHome = () => {
    history.push("/input");
  };
  return (
    <Section>
      <ItemList>
        <Item>
          <Button onClick={goHome}>단어입력</Button>
        </Item>
        <Item>
          <Button>단어관리</Button>
        </Item>
        <Item>
          <Button>시작</Button>
        </Item>
      </ItemList>
    </Section>
  );
}
const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemList = styled.ul`
  margin: 60px auto;
`;

const Item = styled.li`
  & + & {
    margin-top: 40px;
  }
`;

const Button = styled.button`
  width: 220px;
  height: 70px;
  color: ${({ theme }) => theme.pallete.lightIvory};
  background-color: ${({ theme }) => theme.pallete.navy};
  outline: none;
  border: none;
  border-radius: 1rem;
  font-size: 2rem;
  letter-spacing: ${({ theme }) => theme.font.letterSpace};
  cursor: pointer;
  padding: 0 1rem;

  &:hover {
    ${({ theme }) => {
      const color = theme.pallete.navy;
      return css`
        background-color: ${darken(0.1, color)};
      `;
    }}
  }
`;
