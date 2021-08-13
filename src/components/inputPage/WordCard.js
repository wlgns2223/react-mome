import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { MdDelete, MdSave } from "react-icons/md";

export default function WordCard({ word, onDelete, onUpdate }) {
  const [name, setName] = useState(word.name);
  const [meaning, setMeaning] = useState(word.meaning);
  const [open, setopen] = useState(false);
  const onClick = useCallback(() => {
    setopen(!open);
  }, [open]);

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
        {open ? (
          <Save onClick={() => onUpdate(word.id, { name, meaning })}>
            <MdSave />
          </Save>
        ) : (
          <Delete onClick={() => onDelete(word.id)}>
            <MdDelete />
          </Delete>
        )}
      </Block>
      {open && (
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
  border-radius: 0.25rem;
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
  border-radius: 0.25rem;
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

const Save = styled.div`
  width: 2rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.pallete.mint};
`;
