import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { MdAddCircle } from "react-icons/md";

export default function InputForm() {
  return (
    <FormPositioner>
      <Form>
        <InputBlock>
          <ItemBlock>
            <Text>단어</Text>
            <Input />
          </ItemBlock>
          <ItemBlock>
            <Text>뜻</Text>
            <Input />
          </ItemBlock>
        </InputBlock>
        <CircleButton>
          <MdAddCircle />
        </CircleButton>
      </Form>
    </FormPositioner>
  );
}

const FormPositioner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2rem;
  margin: 0 1rem;
`;

const Form = styled.form`
  padding: 1rem 1.5rem;
  border-radius: 1rem;
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
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  border: none;
`;
const Text = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: inline-block;
  width: 3rem;
  text-align: center;
`;
const CircleButton = styled.button`
  color: ${({ theme }) => theme.pallete.lightIvory};
  background-color: ${({ theme }) => theme.pallete.lightPink};
  width: 7rem;
  height: 2.5rem;
  border-radius: 0.5rem;
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

  &:hover {
    ${({ theme }) => {
      const color = theme.pallete.lightPink;
      return css`
        background-color: ${darken(0.1, color)};
      `;
    }}
  }
`;
