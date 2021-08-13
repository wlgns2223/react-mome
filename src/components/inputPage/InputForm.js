import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { MdAddCircle } from "react-icons/md";

export default function InputForm({ onCreate }) {
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");

  const onChange = (event, callback) => {
    callback(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, meaning });
    setName("");
    setMeaning("");
  };

  return (
    <FormPositioner>
      <Form onSubmit={onSubmit}>
        <InputBlock>
          <ItemBlock>
            <Text>단어</Text>
            <Input
              type="text"
              placeholder="단어를 입력하세요"
              value={name}
              onChange={(e) => onChange(e, setName)}
            />
          </ItemBlock>
          <ItemBlock>
            <Text>뜻</Text>
            <Input
              type="text"
              placeholder="뜻을 입력하세요"
              value={meaning}
              onChange={(e) => onChange(e, setMeaning)}
            />
          </ItemBlock>
        </InputBlock>
        <CircleButton type="submit">
          <MdAddCircle />
        </CircleButton>
      </Form>
    </FormPositioner>
  );
}

const FormPositioner = styled.div`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.pallete.navy};
  color: ${({ theme }) => theme.pallete.lightIvory};
  position: relative;
`;
const InputBlock = styled.div`
  padding-bottom: 3rem;
`;
const ItemBlock = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  flex: 1;
  height: 2rem;
  font-size: 1.25rem;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  outline: none;
  border: none;
  width: 100%;
`;
const Text = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: inline-block;
  width: 3rem;
  min-width: 3rem;
  text-align: center;
`;
const CircleButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  font-size: 2rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translate(-50%, 0);
  cursor: pointer;

  color: ${({ theme }) => theme.pallete.lightIvory};
  background-color: ${({ theme }) => theme.pallete.lightPink};

  &:hover {
    ${({ theme }) => {
      const color = theme.pallete.lightPink;
      return css`
        background-color: ${darken(0.1, color)};
      `;
    }}
  }
`;
