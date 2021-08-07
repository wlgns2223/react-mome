import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { MdDelete } from "react-icons/md";

export default function WordCard({ word, onDelete }) {
  const [name, setName] = useState(word.name);
  const [meaning, setMeaning] = useState(word.meaning);
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <Card onClick={onClick}>
      <Block>
        <Text>단어</Text>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Delete onClick={() => onDelete(word.id)}>
          <MdDelete />
        </Delete>
      </Block>
      {active && (
        <Block>
          <Text>뜻</Text>
          <Input
            value={meaning}
            onChange={(e) => {
              setMeaning(e.target.value);
            }}
          />
        </Block>
      )}
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 1rem;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.pallete.navy};
  color: ${({ theme }) => theme.pallete.lightIvory};
  &:hover {
    ${({ theme }) => {
      const color = theme.pallete.navy;
      return css`
        background-color: ${darken(0.1, color)};
      `;
    }}
  }
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }
`;

const Text = styled.span`
  font-size: 1rem;
  min-width: 2rem;
  line-height: 1.25rem;
  display: inline-block;
  width: 3rem;
`;

const Input = styled.input`
  flex: 1;
  height: 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  outline: none;
  border: none;
`;

const Delete = styled.div`
  width: 2rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.pallete.lightPink};
  }
`;
